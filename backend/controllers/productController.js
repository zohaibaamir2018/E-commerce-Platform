const Product = require("../models/Product");


// Add New Product
const addProduct = async (req, res, next) => {
    try {
        const { name, title, price, originalPrice, discount, rating, image, images, description, brand } = req.body;

        // Create new product
        const product = await Product.create({ name, title, price, originalPrice, discount, rating, image, images, description, brand });

        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

// Get Single Product
const getProductById = async (req, res) => {
    try {
        const id = req.query.id;
        console.log("ID:", id);

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};

module.exports = { addProduct, getProducts, getProductById, updateProduct, deleteProduct };
