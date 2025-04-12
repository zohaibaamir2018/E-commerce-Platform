const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
    try {
        const { products, totalAmount } = req.body;

        const order = await Order.create({
            user: req.user.id,
            products,
            totalAmount,
        });

        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
};

// Get Orders for User
const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate("products.product");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

// Get All Orders (Admin)
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("products.product");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

// Update Order Status (Admin)
const updateOrderStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });

        if (!order) {
            const error = new Error("Order not found");
            error.status = 404;
            throw error;
        }

        res.json({ message: "Order status updated successfully", order });
    } catch (error) {
        next(error); // Passes errors to the centralized error handler
    }
};

// Delete Order (Admin)
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting order", error });
    }
};

module.exports = { createOrder, getUserOrders, getAllOrders, updateOrderStatus, deleteOrder };
