const TokenManager = require('../controllers/token_manager'); // path ที่ถูกต้อง

const verifyToken = (req, res, next) => {
  try {
    const authResult = TokenManager.checkAuthenication(req);
    
    if (!authResult.success) {
      if (authResult.expired) {
        return res.status(401).json({
          success: false,
          error: "Token expired",
          message: "Please login again"
        });
      }
      
      return res.status(403).json({
        success: false,
        error: authResult.error,
        message: "Access denied"
      });
    }
    req.user = authResult.data;
    
    return next();
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message
    });
  }
};

module.exports = verifyToken;