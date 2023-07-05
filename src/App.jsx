import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';
import SoundSection from './Components/SoundSection';
import DisplaySection from './Components/DisplaySection';
import WebgiViewer from './Components/WebgiViewer';
import { useRef } from 'react';
function App() {
	const webgiViewerRef = useRef();

	const handlerPreview=() => {
		webgiViewerRef.current.triggerPreview();
	}
    return (
        <div className="App">
            <Nav />
            <Jumbotron />
            <SoundSection />
            <DisplaySection triggerPreview={handlerPreview}/>
			<WebgiViewer ref={webgiViewerRef}/>
        </div>
    );
}

export default App;
