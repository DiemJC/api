import { deleteDoc, getDoc, getDocs, updateDoc } from '.';
import Variety from '../models/store/Variety';

export const createVariety = async (req,res,next) => {
    try {
        const variety = new Variety(req.body);
        await variety.save();
        return res.status(200).send({success:true,message:'Registro exitoso'});
    } catch (error) {
        next(error);
    }
}

export const getVarieties = async (req,res,next) => {
    try {
        const docs = await getDocs(Variety).populate('product').populate('createdBy');
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error);       
    }
}

export const getVarietiesBy = async (req,res,next) => {
    try {
        const id = req.params.id;
        const docs = await Variety.find({id}).populate('product').populate('createdBy');
        if(docs.length === 0) return res.status(404).send({success:false,message:'Sin registros',docs:[]});
        return res.status(200).send({success:true,message:'Petición exitosa',docs});
    } catch (error) {
        next(error)
    }
}

export const getVarietyById = async (req,res,next) => {
    try {
        const doc = await getDoc(req.params.id,Variety).populate('product').populate('createdBy');
        if(!doc) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,message:'Petición exitosa',doc});
    } catch (error) {
        next(error);
    }
}

export const updateVariety = async (req,res,next) => {
    try {
        const old = await updateDoc(req.params.id,Variety,req.body);
        return res.status(200).send({success:true,old,new:req.body,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}

export const deleteVariety = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleted = await deleteDoc(id,Variety);
        if(!deleted) return res.status(400).send({success:false,message:'Petición inválida'});
        return res.status(200).send({success:true,message:'Petición exitosa'});
    } catch (error) {
        next(error);
    }
}