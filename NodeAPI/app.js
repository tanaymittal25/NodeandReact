const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//const postRoutes = require('./routes/post');

mongoose
.connect(
    'mongodb://tanayagarwal:Tanay2598@ds051841.mlab.com:51841/tanaynodeapi', 
    {useNewUrlParser: true}
    ).then(() => console.log(`Connected to DB`));

mongoose.connection.on("error", err => {
    console.log(`DB Error: ${err.message}`);
});

dotenv.config();
app.use(morgan("dev"));
//app.use("/", postRoutes);

const port =  process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Connected to Port ${port}`);
});