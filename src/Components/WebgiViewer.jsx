import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from 'react';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from 'webgi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const canvasContainerRef = useRef(null);

    useImperativeHandle(
        ref,
        () => ({
            triggerPreview() {
                canvasContainerRef.current.style.pointerEvents = 'all';
                props.contentRef.current.style.opacity = '0';
                gsap.to(positionRef, {
                    x: 13.04,
                    y: -2.01,
                    z: 2.29,
                    duration: 2,
                    onUpdate: () => {
                        viewerRef.setDirty(); //@it works from time to time
                        cameraRef.positionTargetUpdated(true);
                    },
                });

                gsap.to(targetRef, {
                    x: 0.11,
                    y: 0.0,
                    z: 0,
                    duration: 2,
                });
                viewerRef.scene.activeCamera.setCameraOptions({
                    controlsEnabled: true,
                });
            },
        }),
        [],
    );
    const memorizedScrollAnimation = useCallback(
        (position, target, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        },
        [],
    );

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });
        setViewerRef(viewer);
        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin);

        const camera = viewer.scene.activeCamera;
        setCameraRef(camera);
        const position = camera.position;
        setPositionRef(position);
        const target = camera.target;
        setTargetRef(target);
        await viewer.addPlugin(GBufferPlugin);
        await viewer.addPlugin(new ProgressivePlugin(32));
        await viewer.addPlugin(SSAOPlugin);
        await viewer.addPlugin(new TonemapPlugin(true));
        await viewer.addPlugin(SSRPlugin);
        await viewer.addPlugin(GammaCorrectionPlugin);
        await viewer.addPlugin(BloomPlugin);

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline();

        // Import and add a GLB file.
        await manager.addFromPath('scene-black.glb');

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);

        let needsUpdate = true;
        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        };
        viewer.addEventListener('preFrame', () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });
        memorizedScrollAnimation(position, target, onUpdate);
    }, []);
    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id="webgi-canvas-container" ref={canvasContainerRef}>
            <canvas id="webgi-canvas" ref={canvasRef}></canvas>
        </div>
    );
});

export default WebgiViewer;
