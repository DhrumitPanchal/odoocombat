import express from "express";

 const router = express.Router();

 router.get("/login", (req, res) => {
  res.json({ message: "Welcome to the OdooCombat API!" });
});
export default router
