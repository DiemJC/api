import { Schema , model } from 'mongoose';

const SubCategory = new Schema({
    label:{type:String,required:true},
    category:{type:Schema.ObjectId,ref:'Category',required:true}
});

export default model('SubCategory',SubCategory);