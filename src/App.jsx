import React, { useState, useCallback, useRef } from 'react';
import VideoPlayer from './videoPlayer';
import './App.css'; 

const App = () => {
  const playerRef = useRef(null);

  const [videoJsOptions] = useState({
    autoplay: true,
    muted: true,
    controls: false,
    responsive: true,
    fluid: true,
    fill:true,
    sources: [{
      src: 'https://froppy.stepinus.store/$/59I8c',
      type: 'video/mp4'
    }]
  });


  const handlePlayerReady = useCallback((player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  }, []);

  return (
    <div className="App">
        <div className="player-wrapper">
          <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
  );
};

export default App;
