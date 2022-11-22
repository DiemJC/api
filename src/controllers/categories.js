import { getDocs } from '.';
import Category from '../models/store/Category';

export const createCategory = async (req,res,next) => {
    try {
        const category = new Category(req.body);
        await category.save();
        return res.status(200).send({success:true,message:'Registro exitoso'});
    } catch (error) {
        next(error);
    }
}

export const getCategories = async (req,res,next) => {
    try {
        const docs = await getDocs(Category);
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}