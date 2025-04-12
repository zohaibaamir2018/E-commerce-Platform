const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// User Signup
const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Create new user
        const user = await User.create({ name, email, password, role });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error registering user", error });
    }
};

// User Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });


        // Generate token
        const token = generateToken(user);

        // res.cookie("userRole", user.role, { httpOnly: true });
        res.cookie("token", token, { httpOnly: true });
        res.json({ message: "Login successful", user, token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

// User Logout
const logout = (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.json({ message: "Logout successful" });
};

const crypto = require("crypto");
const nodemailer = require("nodemailer");

// FORGOT PASSWORD
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const token = crypto.randomBytes(32).toString("hex");
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 1000 * 60 * 15; // 15 minutes
        await user.save();

        const resetUrl = `http://localhost:3000/reset-password/${token}`;

        // send email
        // const transporter = nodemailer.createTransport({
        //     service: 'Gmail',
        //     auth: {
        //         user: "darwin.leffler@ethereal.email", // use .env
        //         pass: "q55Ez1YBkeDbnnfC5r"
        //     }
        // });

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "darwin.leffler@ethereal.email",
              pass: "q55Ez1YBkeDbnnfC5r",
            },
          });

        // await transporter.sendMail({
        //     to: user.email,
        //     subject: "Reset Your Password",
        //     html: `<p>Click below to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`
        // });

        const info = await transporter.sendMail({
            from: '"Phlonx Furniture 👻" <maddison53@ethereal.email>', // sender address
            to: user.email, // list of receivers
            subject: "Password Reset Link ✔", // Subject line
            text: "Click Below to reset your password", // plain text body
            html: `<a href="${resetUrl}">${resetUrl}</a>`, // html body
          });

          const id = info.messageId

        res.json({ message: "Password reset link sent!", resetUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending reset link" });
    }
};

// RESET PASSWORD
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) return res.status(400).json({ message: "Invalid or expired token" });

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ message: "Password has been reset successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error resetting password" });
    }
};

module.exports = { register, login, logout, forgotPassword, resetPassword };

