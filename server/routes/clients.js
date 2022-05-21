import { Router } from "express";
import ClientModel from "../models/client.js";
import ProviderModel from "../models/provider.js";
const clientsRouter = Router();

/**
 * @swagger
 * /clients:
 *    get:
 *      summary: Returns all clients and providers.
 *      tags:
 *        - clients
 *      responses:
 *        200:
 *          description: Clients retrieved successfully.
 *        500:
 *          description: Error while retriving clients.
 */
clientsRouter.get('/', async (req, res) => {
  try {
    const clients = await ClientModel.find();
    const providers = await ProviderModel.find();
    res.status(200).json({ clients: clients, providers: providers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default clientsRouter;