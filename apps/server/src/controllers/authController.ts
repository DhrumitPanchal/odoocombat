import { Request, Response } from "express";
import User from "../models/auth";

export async function registerController(req: Request, res: Response) {
  return res.json({
    message: "login"
  })
}
