import React from "react";
import styled from "styled-components";
import videojs from "video.js";
import "video.js/dist/video-js.css";

type Props = {
  onReady: (player: any) => void;
  options: {
    controls: boolean;
    responsive: boolean;
    fluid: boolean;
    sources: {
      src: string;
      type: string;
    }[];
    autoplay: boolean;
  };
};

export const VideoJS = (props: Props) => {
  const videoRef: any = React.useRef(null);
  const playerRef: any = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player: any = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player: any = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <Container data-vjs-player>
      <div ref={videoRef} />
    </Container>
  );
};

export default VideoJS;

const Container = styled.div`
  width: 100%;
`;
