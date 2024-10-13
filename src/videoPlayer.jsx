import React, { useLayoutEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options, onReady }) => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);

  useLayoutEffect(() => {
    if (!videoContainerRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add('vjs-big-play-centered');
    videoContainerRef.current.appendChild(videoElement);

    const player = videojs(videoElement, {
      ...options,
      width: '100%',
      height: '100%'
    }, function onPlayerReady() {
      console.log('player is ready');
      onReady && onReady(this);
    });

    playerRef.current = player;

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, onReady]);

  return <div ref={videoContainerRef} data-vjs-player />;
};

export default VideoPlayer;