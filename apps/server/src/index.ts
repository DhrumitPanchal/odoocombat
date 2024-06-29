import { createServer, Server } from "http";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectToDB } from "./lib/db";
import { Server as SocketIOServer, Socket } from "socket.io";

dotenv.config();

const app = express();
const server: Server = createServer(app);
const io = new SocketIOServer(server);
const DB_URL = process.env.DB_URL as string;

// Connect with db
connectToDB(DB_URL);

let broadcaster: Socket | null = null;

io.on("connection", (socket: Socket) => {
    socket.on("broadcaster", () => {
        broadcaster = socket;
    });

    socket.on("watcher", () => {
        if (broadcaster) {
            socket.emit("watcher");
        }
    });

    socket.on("offer", (offer: any) => {
        if (broadcaster) {
            broadcaster.emit("offer", offer);
        }
    });

    socket.on("answer", (answer: any) => {
        if (broadcaster) {
            broadcaster.emit("answer", answer);
        }
    });

    socket.on("candidate", (candidate: any) => {
        if (broadcaster) {
            broadcaster.emit("candidate", candidate);
        }
    });

    socket.on("disconnect", () => {
        if (socket === broadcaster) {
            broadcaster = null;
        }
    });
});

const port: number | string = process.env.PORT || 3000;
server.listen(port, () => console.log("Server is running on port: " + port));
