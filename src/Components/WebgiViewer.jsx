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
    CanvasSnipperPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
} from 'webgi';
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WebgiViewer = () => {
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        // Add some plugins
        const  manager = await viewer.addPlugin(AssetManagerPlugin);
        await addBasePlugins(viewer);

        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin);
 
        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline();

        // Import and add a GLB file.
        await manager.addFromPath('scene-black.glb');
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default WebgiViewer;
