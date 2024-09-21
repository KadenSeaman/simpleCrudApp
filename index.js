const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const { ReturnDocument } = require('mongodb');
const productRoute = require('./routes/product.route.js');


//routes
app.use('/api/products', productRoute);


app.get('/', (req,res) => {
    res.send('Hello World');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to the MongoDB database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});