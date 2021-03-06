import dotenv from 'dotenv/config';

import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';

const PORT = 4000;

import express from 'express';
import mongoose from 'mongoose';
import clientsRouter from './routes/clients.js';
import providersRouter from './routes/providers.js';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.1',
      title: 'Client API',
      description: 'An API to handle clients and their providers.',
      contact: {
        name: 'Maximiliano Diaz',
        email: 'maximiliano_diaz@outlook.com.ar'
      },
      license: {
        name: 'MIT',
        url: 'https://mit-license.org'
      },
      servers: [`localhost:${PORT}`]
    }
  },
  apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);

mongoose.connect("mongodb://localhost/clients_api");
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', serve, setup(swaggerDocs));
app.use('/clients', clientsRouter);
app.use('/providers', providersRouter);

app.listen(PORT, () => console.log('Server Started'));