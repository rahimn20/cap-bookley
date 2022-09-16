const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser); //Register
router.post("/login", loginUser); //Login

module.exports = router;
