import jwt from 'jwt-simple';
import {} from 'dotenv/config';

const secret = process.env.SECRET;

export const AuthMiddleware = (req,res,next) => {
    if(req.headers.authorization) return res.status(401).send({success:false,message:'No autenticado'});

    const token = req.headers.authorization.split(' ')[1];

    const { sub , role } = jwt.decode(token,secret);
    req.user = sub;
    req.role = role;
    next();
}