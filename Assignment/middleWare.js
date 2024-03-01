const authenticationMiddleware = (req, res, next) => {
    // Implement your authentication logic here
    // You can use JWT, session, or any other authentication method
    // For simplicity, let's assume a valid token is required in the Authorization header
    const token = req.header('Authorization');
    if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Token missing' });
    }
    // Add your authentication logic here (e.g., verify the token)
    // If authentication is successful, proceed to the next middleware or route handler
    next();
   };
   module.exports = authenticationMiddleware;