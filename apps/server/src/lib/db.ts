import mongoose from "mongoose";

export const connectToDB = async (url: string) => {
	try {
		await mongoose.connect(url);
		console.log("Database connected!", url);
	} catch (error) {
		console.error("Database connection failed!", url);
		process.exit(1);
	}
};
