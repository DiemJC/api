import { model , Schema } from 'mongoose';

const User = new Schema({
    names:{type:String,required:true},
    lastnames:{type:String,required:true},
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:true,select:false},
    role:{type:String,enum:['dev','adm','usr']},
    createdAt:{type:Date,default:Date.now()},
    lastLogin:{type:Date}
});

export default model('User',User);