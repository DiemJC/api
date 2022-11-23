import { Schema , model } from 'mongoose';

const Category = new Schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    subs:[{type:String}],
    slug:{type:String,required:true},
    status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()},
    brand:{type:Schema.ObjectId,ref:'Brand'}
});

export default model('Category',Category);