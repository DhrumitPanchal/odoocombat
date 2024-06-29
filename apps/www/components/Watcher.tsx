import React, { useRef, useEffect } from 'react';
import SimplePeer, { SignalData } from 'simple-peer';

const Watcher: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:3000');
    
    socketRef.current.onopen = () => {
      socketRef.current?.send(JSON.stringify({ type: 'watcher' }));
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'offer') {
        peerRef.current = new SimplePeer({
          initiator: false,
          trickle: false
        });

        peerRef.current.signal(data.offer);

        peerRef.current.on('signal', (signal: SignalData) => {
          socketRef.current?.send(JSON.stringify({ type: 'answer', answer: signal }));
        });

        peerRef.current.on('stream', (stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        });
      }
    };

    return () => {
      peerRef.current?.destroy();
      socketRef.current?.close();
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default Watcher;
