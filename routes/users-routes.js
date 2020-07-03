const express = require("express");

const router = express.Router();

const USERS = [
  {
    id: `u1`,
    name: "Jake Luong",
    image: "https://m.media-amazon.com/images/I/51QRRRLNgSL._AC_SL260_.jpg",
    places: 3,
  },
];

// GET /api/users/:userId
router.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  const user = USERS.find((u) => u.id === userId);
  res.status(200).json({ user });
});

module.exports = router;
