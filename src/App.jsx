import React, { useState, useCallback, useRef } from 'react';
import VideoPlayer from './videoPlayer';
import './App.css'; 

const App = () => {
  const playerRef = useRef(null);

  const [videoJsOptions] = useState({
    autoplay: true,
    muted: true,
    controls: false,
    responsive: false,
    fluid: false,
    aspectRatio: '9:16',
    sources: [{
      src: 'https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/p7HpafJq51xOYg',
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
      <div className="column left-column">
        {/* Здесь можно добавить содержимое для левого столбца */}
      </div>
      <div className="column center-column">
        <div className="player-wrapper">
          <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
      <div className="column right-column">
        {/* Здесь можно добавить содержимое для правого столбца */}
      </div>
    </div>
  );
};

export default App;
