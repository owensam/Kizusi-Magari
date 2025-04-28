// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// 2. Define your schema
const formDataSchema = new mongoose.Schema({
  category: String,
  car: String,
  brand: String,
  model: String,
  yearOfManufacture: Number,
  price: Number,
  currency: String,
  pickupLoc: String,
  dropoffLoc: String,
  dateOfPickup: String,
  dateOfDropoff: String,
  location: String
});
const Vehicle = mongoose.model('Vehicle', formDataSchema);

// 3. Expose a filtered GET endpoint
app.get('/server', async (req, res) => {
  try {
    const { brand, model, minYOM, maxYOM, minPrice, maxPrice, currency, location, budget } = req.query;
    let filters = {};

    if (brand)     filters.brand = brand;
    if (model)     filters.model = model;
    if (minYOM || maxYOM) {
      filters.yearOfManufacture = {};
      if (minYOM) filters.yearOfManufacture.$gte = Number(minYOM);
      if (maxYOM) filters.yearOfManufacture.$lte = Number(maxYOM);
    }
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = Number(minPrice);
      if (maxPrice) filters.price.$lte = Number(maxPrice);
    }
    if (currency)  filters.currency = currency;
    if (location)  filters.location = location;
    if (budget) {
      // e.g. "0-500K" → ["000", "500000"]
      const [minB, maxB] = budget.replace(/K/, '000').split('-');
      filters.price = { $gte: Number(minB), $lte: Number(maxB) };
    }

    const vehicles = await Vehicle.find(filters);
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching vehicles');
  }
});

// 4. Start the server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
