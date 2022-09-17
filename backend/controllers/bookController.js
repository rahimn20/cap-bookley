const Book = require("../models/bookModel");
const cloudinary = require("cloudinary").v2;
// const cors = require('cors')

// app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

const getBooks = async function (req, res) {
  const books = await Book.find({});
  res.status(200).json(books);
};

const getBook = async function (req, res) {
  console.log(req.params.id);
  Book.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// const createBook = async (req, res) => {
//   const {
//     title,
//     author,
//     description,
//     category,
//     purchaseCount,
//     price,
//     available,
//     imageUrl,
//     publishDate,
//     tags,
//   } = req.body;
//   console.log(req.body);
//   console.log("file:" , req.file)
//   return
//   try {
//     const result = await cloudinary.uploader.upload(imageUrl, {
//       folder: "books",
//     });

//     const book = await Book.create({
//       title,
//       author,
//       description,
//       category,
//       purchaseCount,
//       price,
//       available,
//       imageUrl: {
//         public_id: result.public_id,
//         url: result.secure_url,
//       },
//       publishDate,
//       tags,
//     });
//     res.status(200).json(book);
//   } catch (err) {
//     res.status(400).json({ error: err });
//   }
// };

const createBook = async (req, res) => {
  const {
    title,
    author,
    description,
    category,
    purchaseCount,
    price,
    available,
    imageUrl,
    publishDate,
    tags,
  } = req.body;
  console.log(req.body);
  try {
    const book = await Book.create({
      title,
      author,
      description,
      category,
      purchaseCount,
      price,
      available,
      imageUrl,
      publishDate,
      tags,
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteBook = async (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  console.log(`Successfully deleted ${req.params.id}`);
};

const updateBook = async (req, res) => {
  const updates = req.body;

  Book.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  console.log(`Successfully updated ${req.params.id}`);
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
