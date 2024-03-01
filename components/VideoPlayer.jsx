/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

// Source: https://www.npmjs.com/package/react-player

// Component in a component otherwise the React-player doesn't due hydration
// components/VideoPlayer.js https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
// https://yarnpkg.com/package/react-player
import ReactPlayer from 'react-player/lazy';

// eslint-disable-next-line react/prop-types
function VideoPlayer({ playerRef }) {
  return (
    <ReactPlayer
      ref={playerRef}
      muted
      playing
      loop='true'
      controls
      url='https://youtu.be/j8NDOzR9_Ps?vq=hd1080'
      width='100%'
      height='100%'
    />
  );
}

export default VideoPlayer;
