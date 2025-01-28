const User = require("../models/User");
const router = require("express").Router();
const bcryptjs = require('bcryptjs'); // Use bcryptjs instead of bcrypt
const jwt = require("jsonwebtoken");

router.post('/', async (req, res) => {
    const { userName, email, phone, password } = req.body;

    // Validate request
    if (!userName || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered." });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10); // Higher number increases security but slows hashing
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Save the user to the database
        const newUser = new User({
            userName,
            email,
            phone,
            password: hashedPassword, // Store the hashed password
        });

        await newUser.save();

        res.status(200).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

module.exports = router;

