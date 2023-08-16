import { json } from "express";
import AsyncHandler from "express-async-handler";

import Activity from "../models/activity_model.js";



export const getActivity = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const activity = await Activity.find({ ...keyword });

  res.json(activity);
});

export const getActivityDetails = AsyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);

  res.json(activity);
});

export const addActivity = AsyncHandler(async (req, res) => {
  const activity = await Activity.create(req.body);

  res.json(activity);
});

export const DeleteActivity = AsyncHandler(async (req, res) => {
  const activity = await Activity.findByIdAndDelete(req.params.id);
  res.json({
    message: "done",
  });
});


export const updateActivity = AsyncHandler(async (req, res) => {
  const activity = await Activity.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: "done",
  });
});
