import jwt from 'jwt-simple';
import dayjs from 'dayjs';
import {} from 'dotenv/config';

const secret = process.env.SECRET;

export const SignToken = (user) => {
    const payload = {
        sub:user._id,
        role:user.role,
        iat:dayjs(),
        exp:dayjs().add(1,'hour')
    };

    const token = jwt.encode(payload,secret)
    return token;
}