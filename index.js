import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import clientsRouter from './routes/clients.js';
import providersRouter from './routes/providers.js';

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(express.json());
app.use('/clients', clientsRouter);
app.use('/providers', providersRouter);

app.listen(3000, () => console.log('Server Started'));