import { deleteDoc, getDoc, getDocs, updateDoc } from '.';
import Brand from '../models/store/Brand';

export const createBrand = async (req,res,next) => {
    try {
        const brand = new Brand(req.body);
        await brand.save();
        return res.status(200).send({success:true,message:'Registro exitoso'});
    } catch (error) {
        next(error);
    }
}

export const getBrands = async (req,res,next) => {
    try {
        const docs = await getDocs(Brand);
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}

export const getBrandById = async (req,res,next) => {
    try {
        const doc = await getDoc(req.params.id,Brand);
        if(!doc) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,message:'Petición exitosa',doc});
    } catch (error) {
        next(error);
    }
}

export const updateBrand = async (req,res,next) => {
    try {
        const old = await updateDoc(req.params.id,Brand,req.body);
        return res.status(200).send({success:true,old,new:req.body,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}

export const deleteBrand = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleted = await deleteDoc(id,Brand);
        if(!deleted) return res.status(400).send({success:false,message:'Petición inválida'});
        return res.status(200).send({success:true,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}