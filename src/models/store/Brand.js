import { Schema , model } from 'mongoose';

const Brand = new Schema({
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true},
    status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
});

export default model('Brand',Brand);