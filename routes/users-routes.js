const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

// GET /api/users
router.get("/", usersController.getUsers);

// POST /api/users/signup
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

// POST /api/users/login
router.post("/login", usersController.login);

module.exports = router;
