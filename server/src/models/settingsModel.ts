import { model, Schema } from "mongoose";

export const settingsSechema = new Schema({
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

export const SettingsModel = model('settins' ,settingsSechema)