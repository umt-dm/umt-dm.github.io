// components/VideoPlayer.tsx
import dynamic from 'next/dynamic';
import React from 'react';

const NextVideo = dynamic(() => import('next-video'), { ssr: false });

interface VideoPlayerProps {
  src: string | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => (
  <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
    <NextVideo
      src={src}
      controls
    />
  </div>
);

export default VideoPlayer;
