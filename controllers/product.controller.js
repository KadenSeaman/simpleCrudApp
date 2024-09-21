const Product = require('../models/product.model');

const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {   
        res.status(500).json(    
            {message:error.message}
        )
    }
}

const getProduct = async (req, res) => {
    try {
        const productByID = await Product.findById(req.params.id);
        res.status(200).json(productByID);
    } catch (error) {   
        res.status(500).json(    
            {message:error.message}
        )
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async (req,res) => {
    try {
        const {id} = req.params;

        const updatedProduct = await Product.findByIdAndUpdate(id);

        if(!updatedProduct){
            return res.status(404).json({message: 'Product not found'});
        }

        const updatedProductFound = await Product.findById(id);
        res.status(200).json(updatedProductFound);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params;

        const deletedProduct = await products.findByIdAndDelete(id);

        if(!deletedProduct){
            return res.status(404).json({message:'Product not found'});
        }

        res.status(200).json({message:'Product deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}