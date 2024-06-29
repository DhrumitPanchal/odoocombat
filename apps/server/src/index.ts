import { createServer, Server } from "http";
import app from "./app";
import WebSocket from "ws";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const server: Server = createServer(app);
const wss: WebSocket.Server = new WebSocket.Server({ server });
const DB_URL = process.env.DB_URL as string;
const PORT = process.env.PORT;
let broadcaster: WebSocket | null = null;

wss.on("connection", (ws: WebSocket) => {
	ws.on("message", (message: string) => {
		const data = JSON.parse(message);

		switch (data.type) {
			case "broadcaster":
				broadcaster = ws;
				break;
			case "watcher":
				ws.send(JSON.stringify({ type: "watcher" }));
				break;
			case "offer":
				if (broadcaster) {
					broadcaster.send(
						JSON.stringify({ type: "offer", offer: data.offer })
					);
				}
				break;
			case "answer":
				if (broadcaster) {
					broadcaster.send(
						JSON.stringify({ type: "answer", answer: data.answer })
					);
				}
				break;
			case "candidate":
				if (broadcaster) {
					broadcaster.send(
						JSON.stringify({
							type: "candidate",
							candidate: data.candidate,
						})
					);
				}
				break;
		}
	});

	ws.on("close", () => {
		if (ws === broadcaster) {
			broadcaster = null;
		}
	});
});

const port: number | any = process.env.PORT || 8080;

try {
	app.listen(PORT, () => console.log("Server is running on : " + PORT));
	mongoose.connect(DB_URL).then(() => console.log("mongoDB connected"));
  } catch (error) {
	console.log(error);
  }
  
