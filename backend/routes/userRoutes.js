const express = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
// router.post("/", createUser);
router.delete("/:id", verifyToken, deleteUser);
router.patch("/:id", verifyToken, updateUser);

module.exports = router;
