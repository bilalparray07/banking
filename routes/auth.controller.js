const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/user.model'); // Import the User model
require('dotenv').config();
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      password: hashedPassword,
      role, // Assign the user's role
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user by username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(401).json({ message: 'Authentication failed' });
//     }

//     // Compare the provided password with the hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Authentication failed' });
//     }

//     // Generate a JWT token with the user's role
//     const token = jwt.sign(
//       { userId: user._id, username: user.username, role: user.role },
//       secretKey,
//       { expiresIn: '1h' } // Token expires in 1 hour
//     );

//     res.status(200).json({ token, userId: user._id, username: user.username, role: user.role });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// Modify the exports.login function in your backend code

exports.login = async (req, res) => {
  try {
    const { username, password, role } = req.body; // Include role in the request body

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT token with the user's role
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: role }, // Use the role from the request body
      process.env.secret,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.status(200).json({ token, userId: user._id, username: user.username, role }); // Send the correct role in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
