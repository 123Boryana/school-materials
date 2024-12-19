import express from 'express';
import Request from '../models/request.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { id, date, description } = req.body;

    if (!id || !date || !description) {
      return res.status(400).send("All fields are required");
    }

    const newRequest = new Request({ id, date, description });
    await newRequest.save();

    res.status(201).json(newRequest); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get('/', async (req, res) => {
  try {
    const requests = await Request.find(); 
    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
