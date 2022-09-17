const Order = require("../models/orderModel");
const User = require("../models/userModel");

const getOrders = async function (req, res) {
  const orders = await Order.find({});
  res.status(200).json(orders);
};

const getOrder = async function (req, res) {
  console.log(req.params.id);
  Order.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const createOrder = async (req, res) => {
  const { userID, totalAmount } = req.body;
  try {
    const order = await Order.create({
      //   booksOrdered,
      owner: userID,
      totalAmount,
    });
    const user = await User.findById(userID).exec();
    console.log(user);
    user.orders.push(order._id);
    await User.findByIdAndUpdate(userID, user);
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

const deleteOrder = async (req, res) => {
  Order.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  console.log(`Successfully deleted ${req.params.id}`);
};

const updateOrder = async (req, res) => {
  const updates = req.body;

  Order.findByIdAndUpdate(req.params.id, updates, { new: true })
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
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
