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

/**
 * @swagger
 * /clients:
 *  post:
 *    summary: Creates a new Client.
 *    consumes:
 *      - application/json
 *    tags:
 *      - clients
 *    parameters:
 *      - in: body
 *        name: client
 *        description: New Client.
 *        schema:
 *          $ref: '#/definitions/Client'
 *    responses:
 *      201:
 *        description: Newly created Client.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#definitions/Client'
 *      400:
 *        description: Error while creating Client.
 */
clientsRouter.post('/', async (req, res) => {
  const client = new ClientModel({
    ...req.body
  });
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /clients/{id}:
 *  put:
 *    summary: Updates Client data.
 *    consumes:
 *      - application/json
 *    tags:
 *      - clients
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Provider ID.
 *      - in: body
 *        name: client
 *        description: Updated Client.
 *        schema:
 *          $ref: '#/definitions/Client'
 *    responses:
 *      200:
 *        description: Provider updated successfully.
 *      404:
 *        description: Error while updating Provider.
 * definitions:
 *  Client:
 *    type: object
 *    required:
 *    - name
 *    - email
 *    - phone
 *    - providers
 *    properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      phone:
 *        type: string
 *      providers:
 *        type: array
 *        items:
 *          type: string
 */
clientsRouter.put('/:id', async (req, res) => {
  const newClient = { ...req.body }
  try {
    const updatedClient = await ClientModel.findByIdAndUpdate(req.params.id, newClient);
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

/**
 * @swagger
 * /clients/{id}:
 *  delete:
 *    summary: Deletes Client record.
 *    tags:
 *      - clients
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Client ID.
 *    responses:
 *      200:
 *        description: Client deleted successfully.
 *      204:
 *        description: No Content.
 */
clientsRouter.delete('/:id', async (req, res) => {
  try {
    const deletedClient = await ClientModel.findByIdAndDelete(req.params.id);
    if (deletedClient) {
      res.status(200).json(deletedClient);
    }
    else res.status(204).json({ message: 'Client not found' });
  } catch (error) {
    res.status.json({ message: error.message });
  }
});

export default clientsRouter;