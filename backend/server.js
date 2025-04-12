const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const MONGO_URI = process.env.MONGO_URI;
const cors = require("cors");

// Import shipping routes
const shippingRoutes = require("./routes/shippingRoutes");

// Load environment variables
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Using environment variable for the secret key

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Import routes
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes"); // You can modularize the payment route into a separate file

app.use("/api/auth", authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/uploads', uploadRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes); // Add the payment route
app.use("/api/shipping", shippingRoutes); // Shipping routes

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);

// Security and logging middleware
const helmet = require('helmet');
app.use(helmet()); // Sets various HTTP headers for security

const morgan = require('morgan');
app.use(morgan('combined')); // Logs requests in Apache combined format

// Global error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
