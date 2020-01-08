const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const cors = require('cors');

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://tanayagarwal:Tanay2598@ds051841.mlab.com:51841/tanaynodeapi', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => console.log(`Connected to DB`));

mongoose.connection.on("error", err => {
    console.log(`DB Error: ${err.message}`);
});

dotenv.config();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);

app.get("/", (req, res) => {
    fs.readFile("docs/apiDocs.json", (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});

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