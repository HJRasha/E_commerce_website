const express = require('express');
const app = express();
const path = require("path");

app.use(express.json());

const product =require("./routes/productRoute");
app.use("api/v1",product);



module.exports = app;