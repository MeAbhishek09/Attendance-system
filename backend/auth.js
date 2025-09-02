import express from "express";
import bcrypt from "bcryptjs";
import User from "./User.js";

const router = express.Router();

//  Signup API
router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, username, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) return res.status(400).json({ message: "Username already taken" });
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({ fullName, email, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});




// Login
router.post("/login", async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Find user by username OR email
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    res.json({ success: true, message: "Login successful", user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error during login", error: err.message });
  }
});






export default router;
