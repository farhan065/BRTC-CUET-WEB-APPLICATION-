const User = require("../models/User");
const router = require("express").Router();
const bcryptjs = require('bcryptjs'); // Use bcryptjs instead of bcrypt
const jwt = require("jsonwebtoken");


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Use bcryptjs.compare instead of bcrypt.compare
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const { password: userPassword, role, ...rest } = user._doc; // Access the correct document properties

        // Create JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        // Set token in cookies with httpOnly flag
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
        }).status(200).json({ success: true, message: "Successfully logged in", data: { ...rest }, role });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to log in" });
    }
});

module.exports = router;

