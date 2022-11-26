import { deleteDoc, getDoc, getDocs, updateDoc } from '.';
import Product from '../models/store/Product';

export const createProduct = async (req,res,next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(200).send({success:true,message:'Registro exitoso'});
    } catch (error) {
        next(error);
    }
}

export const getProducts = async (req,res,next) => {
    try {
        const docs = await Product.find().populate('brand').populate('sub');
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}

export const getProductsBy = async (req,res,next) => {
    try {
        const id = req.params.id;
        const docs = await Product.find({id}).populate('brand').populate('sub');;
        if(docs.length === 0) return res.status(404).send({success:false,message:'Sin registros',docs:[]});
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error)
    }
}

export const getProductById = async (req,res,next) => {
    try {
        const doc = await Product.findById(req.params.id).populate('brand').populate('sub');;
        if(!doc) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,message:'Petición exitosa',doc});
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req,res,next) => {
    try {
        const old = await updateDoc(req.params.id,Product,req.body);
        return res.status(200).send({success:true,old,new:req.body,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}

export const deleteProduct = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleted = await deleteDoc(id,Product);
        if(!deleted) return res.status(400).send({success:false,message:'Petición inválida'});
        return res.status(200).send({success:true,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}