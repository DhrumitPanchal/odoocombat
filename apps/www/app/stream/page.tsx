"use client";

import React, { useState } from "react";
import Streamer from "@/components/Streamer";
import Watcher from "@/components/Watcher";
import { Button } from "@/components/ui/button";
import details from "@/config/details.config";

const Stream: React.FC = () => {
	const [isBroadcaster, setIsBroadcaster] = useState(false);

	return (
		<div className="flex items-center justify-center w-full h-full flex-col gap-8">
			<h1 className="text-[2rem] tracking-tighter">
				{details.name} Streaming
			</h1>
			<Button
				className="w-48"
				variant={isBroadcaster && "destructive" || "default"}
				onClick={() => setIsBroadcaster(!isBroadcaster)}
			>
				{isBroadcaster ? "Stop Broadcasting" : "Start Broadcasting"}
			</Button>
			{isBroadcaster ? <Streamer /> : <Watcher />}
		</div>
	);
};

export default Stream;
