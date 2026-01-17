import jwt from 'jsonwebtoken';

export const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send("access denied");
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
        if (err) {
            return res.status(403).send("invalid token");
        }
        req.user = decoded;
        next();
    })
}