const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.user = user; // Attach the user to the request for future use
    next(); // Continue to the next middleware or route
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
