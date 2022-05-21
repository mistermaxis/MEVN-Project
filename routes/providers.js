import { Router } from "express";
import ProviderModel from "../models/provider.js";
const providersRouter = Router();

/**
 * @swagger
 * /providers:
 *  post:
 *    summary: Creates a new Provider.
 *    consumes:
 *      - application/json
 *    tags:
 *      - providers
 *    parameters:
 *      - in: body
 *        name: provider
 *        description: Provider name.
 *        schema:
 *          $ref: '#/definitions/Provider'
 *    responses:
 *      201:
 *        description: Provider created successfully.
 *      400:
 *        description: Error while creating Provider.
 * definitions:
 *  Provider:
 *    type: object
 *    required:
 *    - name
 *    properties:
 *      name:
 *        type: string
 */
providersRouter.post('/', async (req, res) => {
  const provider = new ProviderModel({
    name: req.body.name,
  });
  try {
    const newProvider = await provider.save();
    res.status(201).json(newProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /providers/{id}:
 *  patch:
 *    summary: Updates Provider data.
 *    consumes:
 *      - application/json
 *    tags:
 *      - providers
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Provider ID.
 *      - in: body
 *        name: name
 *        description: Provider name.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *    responses:
 *      200:
 *        description: Provider updated successfully.
 *      404:
 *        description: Error while updating Provider.
 */
 providersRouter.patch('/:id', async (req, res) => {
  try {
    const provider = await ProviderModel.findOne({ _id: req.params.id });
    provider.name = req.body.name;
    const updatedProvider = await provider.save();
    res.status(200).json(updatedProvider);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default providersRouter;