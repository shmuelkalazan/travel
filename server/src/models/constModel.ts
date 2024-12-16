import { model, Schema } from "mongoose";

export const constSechema = new Schema({
    description:{
        description:String,
        amount:Number,
    },

},{timestamps:true})

export const ConstModel = model('const' ,constSechema)