const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const placesController = require("../controllers/places-controllers");
const fileUpload = require("../middleware/file-upload");
const auth = require("../middleware/auth");

// GET /api/places/:placeId
router.get("/:placeId", placesController.getPlaceById);

// GET /api/places/user/:userId
router.get("/user/:userId", placesController.getPlacesByUserId);

router.use(auth);

// POST /api/places
router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesController.createPlace
);

// PATCH /api/places/:placeId
router.patch(
  "/:placeId",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesController.updatePlace
);

// DELETE /api/places/:placeId
router.delete("/:placeId", placesController.deletePlace);

module.exports = router;
