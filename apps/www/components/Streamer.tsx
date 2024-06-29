import React, { useRef, useEffect } from 'react';
import SimplePeer, { SignalData } from 'simple-peer';
import io from 'socket.io-client';

const Streamer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:8080');
    
    socketRef.current.emit('broadcaster');

    socketRef.current.on('watcher', () => {
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
            socketRef.current?.emit('offer', signal);
          });

          peerRef.current.on('connect', () => {
            console.log('Connected');
          });

          peerRef.current.on('data', (data) => {
            console.log(data);
          });
        });
    });

    return () => {
      peerRef.current?.destroy();
      socketRef.current?.disconnect();
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default Streamer;
