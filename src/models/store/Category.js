import { Schema , model } from 'mongoose';

const Category = new Schema({
    name:{type:String,reuired:true,unique:true},
    slug:{type:String,required:true},
    status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()},
    brand:{type:Schema.ObjectId,ref:'Brand'}
});

export default model('Category',Category);