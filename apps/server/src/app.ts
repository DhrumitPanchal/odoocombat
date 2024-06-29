import express, { Request, Response } from "express";
import authRouter from "./routes/authRoute";
import cors from "cors";

const app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRouter);

app.get("/health", (req: Request, res: Response) => {
	res.status(200).json({
		message: "Health check done.",
	});
});

export default app;
