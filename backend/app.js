const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server listening on port ${process.env.PORT} and connected to db .`
    );
  });
});
