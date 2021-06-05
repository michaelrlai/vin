require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { response } = require("express");
const vehicleApi = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api",
});
const imageApi = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1",
});

const port = process.env.PORT || 5001;
const imageKey = process.env.KEY;
const imageEngine = process.env.ENGINE;

app.use(cors());

app.get("/api/v1/:id", async (req, res) => {
  try {
    const responseData = await vehicleApi.get(
      `/vehicles/decodevinvaluesextended/${req.params.id}?format=json`
    );
    const responseImages = await imageApi.get(
      `?key=${imageKey}&cx=${imageEngine}&searchType=image&q=${responseData.data.Results[0].ModelYear} ${responseData.data.Results[0].Make} ${responseData.data.Results[0].Model}`
    );

    const response = {
      data: responseData.data,
      images: responseImages.data.items,
    };

    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
