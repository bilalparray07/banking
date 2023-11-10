const adminAuthMiddleware = (req, res, next) => {
    const user = req.user; // Assuming you've added the user object to the request in the auth middleware
  
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. You are not an administrator.' });
    }
  
    next();
  };
  
  module.exports = adminAuthMiddleware;
  