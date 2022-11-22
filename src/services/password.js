import { hash , genSalt , compare } from 'bcryptjs';
import User from '../models/session/User';

const getHash = async (email) => {
    try {
        const user = await User.findOne({email}).select('password');
        if(!user) return false;
        const { password } = user;
        return password;
    } catch (error) {
        throw error;
    }
}

export const makeHash = async (password) => {
    try {
        const salt = await genSalt(10);
        const hashedPassword = await hash(password,salt);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export const checkPassword = async (password,email) => {
    try {
        const hash = await getHash(email);
        if(!hash) return false;
        const isValid = await compare(password,hash);
        return isValid;
    } catch (error) {
        throw error;
    }
}