const express = require("express");
const router = new express.Router();
require("dotenv").config();
const { env } = require("process");
const app = express();
const routes = require("./routes/tasks");
const connectDB = require("./db/connect");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", routes);

const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION_STRING);
    app.listen(env.PORT, () => {
      console.log("Server is up on port " + env.PORT);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

start();
