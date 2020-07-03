const express = require("express");

const router = express.Router();

const placesControllers = require("../controllers/places-controllers");

// GET /api/places/:placeId
router.get("/:placeId", placesControllers.getPlaceById);

// GET /api/places/user/:userId
router.get("/user/:userId", placesControllers.getPlacesByUserId);

// POST /api/places
router.post("/", placesControllers.createPlace);

// PATCH /api/places/:placeId
router.patch("/:placeId", placesControllers.updatePlace);

// DELETE /api/places/:placeId
router.delete("/:placeId", placesControllers.deletePlace);

module.exports = router;
