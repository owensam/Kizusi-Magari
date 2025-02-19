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
  pickupLoc: String,
  dropoffLoc: String,
  dateOfPickup: String,
  dateOfDropoff: String,
});

const carsSchema = new mongoose.Schema({});

const FormDataModel = mongoose.model("vehicle", formDataSchema);
const carsModel = mongoose.model("car", carsSchema);

app.get("/server", async (req, res) => {
  try {
    const vehicles = await FormDataModel.find();
    const cars = await carsModel.find();
    const data = {
      vehicles,
      cars,
    };
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error getting form data!");
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
