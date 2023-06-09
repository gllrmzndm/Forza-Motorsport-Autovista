/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

// Component in a component otherwise the React-player doesn't due hydration
// components/VideoPlayer.js https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
// https://yarnpkg.com/package/react-player
import ReactPlayer from "react-player/lazy";

// eslint-disable-next-line react/prop-types
function VideoPlayer({ playerRef }) {

  return (
    <ReactPlayer
        ref={playerRef}
        muted
        playing
        loop="true"
        controls
        url='https://youtu.be/eJzEmkpWQj0'
        width="100%"
        height="100%"
      />
  );
}



export default VideoPlayer
