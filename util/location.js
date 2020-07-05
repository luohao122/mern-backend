const axios = require("axios");
const dotenv = require("dotenv");

// Setup dotenv to read API KEY from environment variable
dotenv.config();

const HttpError = require("../models/http-error");

const getCoordsForAddress = async (address) => {
  // DUMMY data if you don't setup an billing accoutn for Google API
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516,
  // };
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.GOOGLE_MAP_API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address",
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
};

module.exports = getCoordsForAddress;
