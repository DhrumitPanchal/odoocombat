import express from "express";
import  authRouter  from "./routes/authRoute";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",authRouter)
app.get("/" , (req,res) => {
    res.send("Server is running...")
})
export default app;
