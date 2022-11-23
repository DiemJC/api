import { Schema , model } from 'mongoose';

const Product = new Schema({
    code:{type:String,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true},
    status:{type:Boolean,default:false},
    extracto:{type:String},
    createdAt:{type:Date,default:Date.now()},
    brand:{type:Schema.ObjectId,ref:'Brand'},
    category:{type:Schema.ObjectId,ref:'SubCategory'},
    price:{type:Number,default:0},
    cover:{type:String,required:true},
    stock:{type:Number,default:0},
    status:{type:Boolean,default:false},
    discount:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date}
});

export default model('Product',Product);