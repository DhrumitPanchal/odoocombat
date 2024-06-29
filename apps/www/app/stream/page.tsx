"use client";

import React, { useState } from "react";
import Streamer from "@/components/Streamer";
import Watcher from "@/components/Watcher";

const Stream: React.FC = () => {
	const [isBroadcaster, setIsBroadcaster] = useState(false);

	return (
		<div className="App">
			<h1>WebRTC Streaming</h1>
			<button onClick={() => setIsBroadcaster(!isBroadcaster)}>
				{isBroadcaster ? "Stop Broadcasting" : "Start Broadcasting"}
			</button>
			{isBroadcaster ? <Streamer /> : <Watcher />}
		</div>
	);
};

export default Stream;
