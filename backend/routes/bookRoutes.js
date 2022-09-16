const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", verifyToken, getBook);
router.post("/", createBook);
router.delete("/:id", verifyToken, deleteBook);
router.patch("/:id", verifyToken, updateBook);

module.exports = router;
