import { deleteDoc, updateDoc } from '.';
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
        const docs = await Category.find().populate('brand');
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}

export const getCategoriesBy = async (req,res,next) => {
    try {
        const id = req.params.id;
        const docs = await Category.find({id}).populate('brand');
        if(docs.length === 0) return res.status(404).send({success:false,message:'Sin registros',docs:[]});
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error)
    }
}

export const getCategoryById = async (req,res,next) => {
    try {
        const doc = await Category.findById(req.params.id).populate('brand');
        if(!doc) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,message:'Petición exitosa',doc});
    } catch (error) {
        next(error);
    }
}

export const updateCategory = async (req,res,next) => {
    try {
        const old = await updateDoc(req.params.id,Category,req.body);
        return res.status(200).send({success:true,old,new:req.body,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}

export const deleteCategory = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleted = await deleteDoc(id,Category);
        if(!deleted) return res.status(400).send({success:false,message:'Petición inválida'});
        return res.status(200).send({success:true,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}