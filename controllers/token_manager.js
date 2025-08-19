const jwk = require('jsonwebtoken');
const token = require('./token_data.json');

class TokenManager {
    static getGenarateToken(payload, expiresIn = "1h") {
        return jwk.sign(payload, token["Secert_key"], { "expiresIn": expiresIn });
    }

    static checkAuthenication(request) {
        try {
            const authHeader = request.headers.authorization;
            
            if (!authHeader) {
                return { success: false, error: "No authorization header" };
            }

            if (!authHeader.startsWith('Bearer ')) {
                return { success: false, error: "Invalid authorization format" };
            }

            const accessToken = authHeader.split(" ")[1];
            
            if (!accessToken) {
                return { success: false, error: "No token provided" };
            }
            const jwkResponse = jwk.verify(accessToken, token["Secert_key"]);
            
            return { 
                success: true, 
                data: jwkResponse 
            };
            
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return { 
                    success: false, 
                    error: "Token expired",
                    expired: true 
                };
            } else if (error.name === 'JsonWebTokenError') {
                return { 
                    success: false, 
                    error: "Invalid token" 
                };
            } else {
                return { 
                    success: false, 
                    error: "Token verification failed" 
                };
            }
        }
    }

    static generatePasswordResetToken(payload) {
        return jwk.sign(
            { 
                ...payload, 
                type: "password_reset" 
            }, 
            token["Secert_key"], 
            { "expiresIn": "15m" }
        );
    }

    static generateAccessToken(payload) {
        return jwk.sign(
            { 
                ...payload, 
                type: "access" 
            }, 
            token["Secert_key"], 
            { "expiresIn": "24h" }
        );
    }

    // ตรวจสอบว่าเป็น token ประเภทไหน
    static verifyTokenType(request, expectedType) {
        const authResult = this.checkAuthenication(request);
        
        if (!authResult.success) {
            return authResult;
        }

        if (authResult.data.type !== expectedType) {
            return { 
                success: false, 
                error: `Expected ${expectedType} token, but got ${authResult.data.type || 'unknown'}` 
            };
        }

        return authResult;
    }

    static getSecert() {
        return require("crypto").randomBytes(64).toString("hex");
    }
}

module.exports = TokenManager;