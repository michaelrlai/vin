require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const vehicleApi = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api",
});

const port = process.env.PORT;

app.use(cors());

app.get("/api/v1/:id", async (req, res) => {
  try {
    const response = await vehicleApi.get(
      `/vehicles/decodevinvaluesextended/${req.params.id}?format=json`
    );

    console.log(response.data);
    res.json(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
