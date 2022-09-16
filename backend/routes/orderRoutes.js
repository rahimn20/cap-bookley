const express = require("express");
const {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.get("/:id", verifyToken, getOrder);
router.post("/", verifyToken, createOrder);
router.delete("/:id", verifyToken, deleteOrder);
router.patch("/:id", verifyToken, updateOrder);

module.exports = router;
