import express from "express";
import { messageMe } from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/conversation", messageMe);

export default router;
