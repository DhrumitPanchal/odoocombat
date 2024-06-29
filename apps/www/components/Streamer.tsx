import React, { useRef, useEffect } from 'react';
import SimplePeer, { SignalData } from 'simple-peer';

const Streamer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080');
    
    socketRef.current.onopen = () => {
      socketRef.current?.send(JSON.stringify({ type: 'broadcaster' }));
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'watcher') {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
            peerRef.current = new SimplePeer({
              initiator: true,
              stream: stream,
              trickle: false
            });

            peerRef.current.on('signal', (signal: SignalData) => {
              socketRef.current?.send(JSON.stringify({ type: 'offer', offer: signal }));
            });

            peerRef.current.on('connect', () => {
              console.log('Connected');
            });

            peerRef.current.on('data', (data) => {
              console.log(data);
            });
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

export default Streamer;
