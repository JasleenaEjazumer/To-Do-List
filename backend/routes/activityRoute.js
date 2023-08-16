import express from "express";
const router = express.Router();

import AsyncHandler from "express-async-handler";

import {  getActivity, addActivity ,DeleteActivity, updateActivity } from "../controllers/activitycontroller.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

router.route("/").get(getActivity);
router.route("/new").post(protect, addActivity);
router.route("/:id").delete(protect, isAdmin, DeleteActivity);
router.route("/:id").put(protect, isAdmin, updateActivity);



export { router as activityRouter };
