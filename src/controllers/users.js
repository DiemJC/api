import User from '../models/session/User';
//SERVICES
import { checkPassword, makeHash } from '../services/password';
import { SignToken } from '../services/auth';
//MONGO
import { getDocs } from '.';


export const SignIn = async (req,res,next) => {
    try {
        const { email , password } = req.body;
        const isValidPassword = await checkPassword(password,email);
        if(!isValidPassword) return res.status(401).send({success:false,message:'Usuario y/o contraseña inválidos'});
        const user = await User.findOne({email});
        if(!user) return res.status(401).send({message:'Usuario y/o contraseña inválidos'});
        await User.findByIdAndUpdate(user._id._bsontype,{lastlogin:Date.now()});
        const token = SignToken(user);
        res.status(200).send({success:true,message:'Bienvenido de nuevo',token,id:user._id,role:user.role});
    } catch (error) {
        next(error);
    }
}
export const CreateUser = async (req,res,next) => {
    try {
        let { body } = req;
        const password = await makeHash(body.password);
        body.password = password;
        const user = new User(body);
        await user.save();
        return res.status(200).send({success:true,message:'Usuario registrado con éxito'});
    } catch (error) {
        next(error);
    }
};

export const GetUsers = async (_,res,next) => {
    try {
        const docs = await getDocs(User);
        if(!docs) return res.status(404).send({success:true,docs:0,message:'No se encontraron registros'});
        return res.status(200).send({success:true,message:'Petición completada',docs});
    } catch (error) {
        next(error);
    }
};



