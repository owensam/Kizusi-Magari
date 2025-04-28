const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();

const app = express();
const mongodbConnectionString = process.env.MONGODB_URI;

// connecting to mongodb server
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongodbConnectionString);
}

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use(express.json());

app.use(cors());

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

const carsSchema = new mongoose.Schema({});

const FormDataModel = mongoose.model("vehicle", formDataSchema);
const carsModel = mongoose.model("car", carsSchema);

app.get("/server", async (req, res) => {
  try {
    const { brand, model, minYOM, maxYOM, minPrice, maxPrice, currency, location, budget } = req.query;

    let filters = {};

    // Apply filters dynamically
    if (brand) filters.brand = brand;
    if (model) filters.model = model;
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
    if (currency) filters.currency = currency;
    if (location) filters.location = location;

    if (budget) {
      // Handle budget like "0-500K"
      const [minB, maxB] = budget.replace('K', '000').split('-');
      filters.price = { $gte: Number(minB), $lte: Number(maxB) };
    }

    // Fetch from database based on filters
    const vehicles = await FormDataModel.find(filters);
    res.json(vehicles);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting filtered form data!");
  }
});


app.post("/server", async (req, res) => {
  try {
    const formData = new FormDataModel(req.body);
    await formData.save();
    console.log("Form data saved successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving form data!");
  }
});

app.listen(PORT, () => {
  console.log("Server started on port 3001");
});
