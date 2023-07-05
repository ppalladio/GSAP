import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';
import SoundSection from './Components/SoundSection';
import DisplaySection from './Components/DisplaySection';
import WebgiViewer from './Components/WebgiViewer';
import { useRef } from 'react';
function App() {
    const webgiViewerRef = useRef();
    const contentRef = useRef();
    const handlerPreview = () => {
        webgiViewerRef.current.triggerPreview();
    };
    return (
        <div className="App">
            <div ref={contentRef} id="content">
                <Nav />
                <Jumbotron />
                <SoundSection />
                <DisplaySection triggerPreview={handlerPreview} />
            </div>
            <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
        </div>
    );
}

export default App;
