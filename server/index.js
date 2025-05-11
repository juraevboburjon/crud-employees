const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;

const userRoute = require("./routes/user.route");

app.use("/api", userRoute);

const startapp = async () => {
  try {
    await mongoose.connect(DB).then(() => console.log("DB connected"));
    app.listen(PORT, () => console.log(`Listen on ${PORT}`));
  } catch (error) {
    console.log(`DB error ${error}`);
  }
};

startapp();
