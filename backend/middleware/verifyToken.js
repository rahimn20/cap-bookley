const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // const authHeader = req.headers.token;
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.jwtSecret, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    // next();
    return res.status(401).json("You are not authorized");
  }
};

module.exports = { verifyToken };
