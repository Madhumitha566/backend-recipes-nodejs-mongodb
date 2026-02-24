import mongoose from "mongoose";

const recipeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    ingredients:{
        type:[String],
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    preparation_time:{
        type:Number,
        required:true
    },//in minutes
    difficulty:{
        type:String,
        enum:['easy','Medium','hard'],
        default:'medium'
    }

},{timestamps:true})

export default mongoose.model('/recipes',recipeSchema)