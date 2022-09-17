const express = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  addToCart,
  checkOut,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
router.get("/:id/checkout", verifyToken, checkOut);
router.post("/:id/cart", verifyToken, addToCart);

// router.post("/", createUser);
router.delete("/:id", verifyToken, deleteUser);
router.patch("/:id", verifyToken, updateUser);

module.exports = router;
