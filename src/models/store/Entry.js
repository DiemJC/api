import { Schema , model } from 'mongoose';

const Entry = new Schema({
    product:{type:Schema.ObjectId,ref:'Product'},
    date:{type:Date,default:Date.now()},
    count:{type:Number,default:0},
    ammount:{type:Number,default:0}
})