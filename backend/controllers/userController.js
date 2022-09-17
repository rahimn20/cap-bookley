const User = require("../models/userModel");

const getUsers = async function (req, res) {
  const users = await User.find({}).populate("orders");
  res.status(200).json(users);
};

const getUser = async function (req, res) {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const addToCart = async (req, res) => {
  const cart = req.body;

  User.findByIdAndUpdate(req.params.id, { cart }, { new: true })
    .populate("cart")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const deleteUser = async (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  console.log(`Successfully deleted ${req.params.id}`);
};

const updateUser = async (req, res) => {
  const updates = req.body;

  User.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  console.log(`Successfully updated ${req.params.id}`);
};

const checkOut = async (req, res) => {
  User.findByIdAndUpdate(req.params.id, { cart: [] }, { new: true })
    .populate("cart")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  addToCart,
  checkOut,
};
