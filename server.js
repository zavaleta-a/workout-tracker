const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static.apply("public"));
