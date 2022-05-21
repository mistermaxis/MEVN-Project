import { Router } from "express";
import ClientModel from "../models/client.js";
const clientsRouter = Router();

clientsRouter.get('/', async (req, res) => {
  try {
    const clients = await ClientModel.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default clientsRouter;