import { Schema , model } from 'mongoose';

const Variety = new Schema({
    id:{type:String,required:true,unique:true}, //BARCODE 
    label:{type:String,required:true}, //SELECT LABEL
    cover:{type:String,required:true}, // image
    product:{type:Schema.ObjectId,ref:"Product"}, //Product
    stock:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date},
    updatedBy:{type:Schema.ObjectId,ref:'User'}
});

export default model('Variety',Variety);