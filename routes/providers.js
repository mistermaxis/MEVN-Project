import { Router } from "express";
import ProviderModel from "../models/provider.js";
const providersRouter = Router();

providersRouter.get('/', async (req, res) => {
  try {
    const providers = await ProviderModel.find();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default providersRouter;