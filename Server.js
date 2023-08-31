const express = require('express');

const app = express();

const dotenv = require('dotenv').config();

const multer = require('multer');

const multerApp = multer();

const errorHandler = require('./Middleware/errorHandler');

const connectDb=require("./config/dbConnection");

connectDb();

// Use for get form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(multerApp.array());
app.use(express.static('public'));

const port = process.env.PORT;

app.use('/api', require('./routes/routes'), errorHandler);

// app.use();

app.listen(port, () => {
    console.log(`This app is running on the ${port} `);
});