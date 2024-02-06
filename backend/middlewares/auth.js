const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuthenticated = async (req,res,next)=>{

    try {
    const authHeader = req.headers['authorization'];
   
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Unauthorized: Token missing or invalid",
        });
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message : "Please login first"
        });
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    console.log("Logged In user- "+req.user.name);
    next();

    } catch (error) {
        return res.status(500)
        .json({
            success : false,
            message : "Something went wrong try again",
        });
        
    }
};