import { deleteDoc, updateDoc } from '.';
import SubCategory from '../models/store/SubCategory';

export const createSub = async (req,res,next) => {
    try {
        const doc = new SubCategory(req.body);
        await doc.save();
        return res.status(200).send({success:true,message:'Registro exitoso'});
    } catch (error) {
        next(error);
    }
}

export const getSubs = async (req,res,next) => {
    try {
        const docs = await SubCategory.find().populate('category');
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}

export const getSubsBy = async (req,res,next) => {
    try {
        const id = req.params.id;
        const docs = await SubCategory.find({id});
        if(docs.length === 0) return res.status(404).send({success:false,message:'Sin registros',docs:[]});
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error)
    }
}

export const getsubsById = async (req,res,next) => {
    try {
        const doc = await SubCategory.findById(req.params.id).populate('category');
        if(!doc) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,message:'Petición exitosa',doc});
    } catch (error) {
        next(error);
    }
}

export const updateSub = async (req,res,next) => {
    try {
        const old = await updateDoc(req.params.id,subs,req.body);
        return res.status(200).send({success:true,old,new:req.body,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}

export const deleteSub = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleted = await deleteDoc(id,subs);
        if(!deleted) return res.status(400).send({success:false,message:'Petición inválida'});
        return res.status(200).send({success:true,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}