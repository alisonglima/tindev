require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://semana:semana@cluster0-mj2p3.mongodb.net/test?retryWrites=true"
);

server.use(express.json());
server.use(routes);

server.listen(3333);
