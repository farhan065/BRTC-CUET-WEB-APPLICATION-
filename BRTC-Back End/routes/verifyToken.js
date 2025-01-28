const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    // Get the token from the 'Authorization' header
    const authHeader = req.headers['authorization'];
    console.log(authHeader)

    if (authHeader) {
        // Extract the token from the 'Bearer <token>' format
        const token = authHeader.split(" ")[1];
        console.log(token)

        // Verify the token
        console.log(process.env.JWT_SEC)
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                console.error('JWT Verify Error:', err.message); // Log error details
                return res.status(403).json("not Authorized");
            }
            req.user = user;
            // Attach user data to request object
            next(); // Proceed to next middleware or route handler
        });
     
    } else {
        // If no token is provided, respond with a 401 status
        return res.status(401).json("You are not authenticated");
    }
};


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log('req.user:', req.user); // Log user object
        console.log('req.params.id:', req.params.id); // Log ID parameter

        if (!req.user) {
            return res.status(403).json("You are not authenticated");
        }

        if (req.user.id  || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.isAdmin) {
            next();
            
        }
        else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
}
module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};