
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, 
}));
// app.use(express.urlencoded({extended: true, limit: '16kb'}));
// app.use(express.static("public"));

// routes
import userRouter from './routes/users.routes.js';

app.use('/api/users', userRouter);

export {
    app
};