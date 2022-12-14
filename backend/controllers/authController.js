const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, address, phoneNumber, password } =
    req.body;

  const newUser = new User({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();

    const accessToken = jwt.sign(
      {
        id: savedUser._id,
      },
      process.env.jwtSecret,
      { expiresIn: "3d" }
    );

    const { password, ...others } = savedUser;
    console.log(`Successfully registered`);
    res.status(200).json({ ...others, accessToken });

    console.log(`Successfully registered user`);
  } catch (err) {
    res.status(500).json(err);
    console.log({ err });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const passwordOriginal = hashedPassword.toString(CryptoJS.enc.Utf8);
    passwordOriginal !== req.body.password &&
      res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.jwtSecret,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    console.log(`Successfully logged in`);
    res.status(200).json({ ...others, accessToken });
  } catch (err) {}
};

module.exports = {
  registerUser,
  loginUser,
};
