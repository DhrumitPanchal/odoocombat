"use client";

import { io } from "socket.io-client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import { cn } from "@/lib/utils";

function Stream() {
	const [audioState, setAudioState] = useState<boolean>(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	const configuration = {
		iceServers: [
			{
				urls: ["stun:stun2.l.google.com:19302"],
			},
		],
		iceCandidatePoolSize: 10,
	};
	const socket = io("http://localhost:8080", { transports: ["websocket"] });

	function muteAudio() {
		setAudioState(!audioState);
	}

	return (
		<>
			<div className="flex flex-col h-full w-full items-center justify-center">
				<div className="flex w-[600px] max-w-[90%] m-auto gap-y-4 flex-col items-end justify-center">
					<video
						ref={videoRef}
						className={cn("rounded-3xl")}
						width={10000}
						autoPlay
					></video>

					<div className="flex gap-x-4">
						<Button>
							<Video className="mr-2"></Video>Start Streaming
						</Button>
						<Button variant={"outline"} className="w-12 px0">
							<VideoOff />
						</Button>
						<Button
							className="w-12 px0"
							variant={audioState ? "default" : "secondary"}
							onClick={muteAudio}
						>
							{audioState ? <Mic /> : <MicOff />}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stream;
