const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect(
    'mongodb://tanayagarwal:Tanay2598@ds051841.mlab.com:51841/tanaynodeapi', 
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log(`Connected to DB`));

mongoose.connection.on("error", err => {
    console.log(`DB Error: ${err.message}`);
});

dotenv.config();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

app.use("/", postRoutes);
app.use("/", authRoutes);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
    	error: "Unauthorized"
    });
  }
});

const port =  process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Connected to Port ${port}`);
});