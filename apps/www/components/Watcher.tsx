import React, { useRef, useEffect } from 'react';
import SimplePeer, { SignalData } from 'simple-peer';
import io from 'socket.io-client';

const Watcher: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:8080');

    socketRef.current.emit('watcher');

    socketRef.current.on('offer', (offer: SignalData) => {
      peerRef.current = new SimplePeer({
        initiator: false,
        trickle: false
      });

      peerRef.current.signal(offer);

      peerRef.current.on('signal', (signal: SignalData) => {
        socketRef.current?.emit('answer', signal);
      });

      peerRef.current.on('stream', (stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    });

    return () => {
      peerRef.current?.destroy();
      socketRef.current?.disconnect();
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default Watcher;
