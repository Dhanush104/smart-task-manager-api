const User = require("../models/User");
const jwt = require("jsonwebtoken");


// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};


// Register User
exports.registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id)
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Login User
exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {

      res.status(200).json({
        success: true,
        token: generateToken(user._id)
      });

    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
