import React, {useRef} from "react";
import {createRoot} from "react-dom/client";

function VideoPlayer() {
    const videoRef = useRef();

    return (<>
        <h2>Video player</h2>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <video ref={videoRef} width="300" controls src="https://res.cloudinary.com/dbfn5lnvx/video/upload/v1599125933/react-tutorial/ref-video-player-challenge.mp4" />
    </>);
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><VideoPlayer /></React.StrictMode>);