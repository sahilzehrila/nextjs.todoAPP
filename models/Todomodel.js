import mongoose from "mongoose";

const Schema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
       type:String,
       required:true
    }
    ,
    isComplete:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true
} )


const Todomodel = mongoose.models.todo || mongoose.model('todo',Schema)

export default Todomodel ;