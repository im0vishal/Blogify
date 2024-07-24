
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, 
}));


// routes
import userRouter from './routes/users.routes.js';

app.use('/api/users', userRouter);

export {
    app
};