import { Schema , model } from 'mongoose';

const Product = new Schema({
    code:{type:String,required:true,unique:true}, //Código de barras
    brand:{type:Schema.ObjectId,ref:'Brand'},
    category:{type:Schema.ObjectId,ref:'SubCategory'},
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true},
    price:{type:Number,default:0},
    stock:{type:Number,default:0}, //Input number
    //---NO SE AGREGAN --//
    status:{type:Boolean,default:false}, //No se coloca de momento
    //extracto:{type:String}, //
    cover:{type:String,required:true}, //No se agregaría de momento
    discount:{type:Boolean,default:false}, //No se gregaria
    createdAt:{type:Date,default:Date.now()}, //Se crea por defecto
    updatedAt:{type:Date}
});

export default model('Product',Product);