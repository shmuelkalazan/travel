import { model, Schema } from "mongoose";

const daySechema = new Schema({
    date:{
        type:Date,
        default:Date.now(),
        uniq:true
    },
    total :{
        type:Number,
        default:0 ,
    },
    accomonation:{
        type:Number,
        default:0,
    },
    food:{
        type:Number,
        default:0,
    },
    activities:{
        type:Number,
        default:0,
    },
    shopping:{
        type:Number,
        default:0,
    },
    other:{
        type:Number,
        default:0,
    },

})
type Day = ReturnType<() => typeof daySechema>

export const DayModel = model('day' ,daySechema)