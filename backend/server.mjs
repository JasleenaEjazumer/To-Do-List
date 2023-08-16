import express from "express";
import dotenv from 'dotenv';
import mongoDB from './config/db.js';
import {activityRouter} from './routes/activityRoute.js';
import { userRouter } from './routes/userRoute.js';
import cors from 'cors';
// import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
mongoDB();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));

app.get('/', (req, res) => {
    res.send("API IS HOT");
});

app.use("/api/activity", activityRouter);
app.use("/api/users", userRouter);

// Use the notFound and errorHandler middleware
// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`SERVER STARTED on port ${PORT}`);
});
