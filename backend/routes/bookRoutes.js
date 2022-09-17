const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");
const { verifyToken } = require("../middleware/verifyToken");
// const {multerUploads} = require("../middleware/multerUploads")

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBook);
// router.post("/", multerUploads, createBook);
router.post("/", createBook);
router.delete("/:id", verifyToken, deleteBook);
router.patch("/:id", verifyToken, updateBook);

module.exports = router;
