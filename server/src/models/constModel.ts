import { model, Schema } from "mongoose";

const constSechema = new Schema({
    description:{
        description:String,
        amount:Number,
    },

},{timestamps:true})

type Const = ReturnType<() => typeof constSechema>
export const ConstModel = model('const' ,constSechema)