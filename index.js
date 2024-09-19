const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

const Product = require('./models/product.model.js');


app.get('/', (req,res) => {
    res.send('Hello World');
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to the MongoDB database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});