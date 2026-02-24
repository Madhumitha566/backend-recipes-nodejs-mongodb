import Recipes from '../models/recipes.js'

export const addrecipes=async(data)=>{
    const newrecipe=await Recipes.create(data)
    return newrecipe
}

export const findAllrecipes=async()=>{
    const allrecipe=await Recipes.find({})
    return allrecipe
}

export const findrecipesbyId=async(id)=>{
    const recipe=await Recipes.findById(id)
    return recipe
}

export const updaterecipe=async(id)=>{
    const  updaterecipedetails=await Recipes.findByIdAndUpdate(id)
    return updaterecipedetails
}

export const deleterecipe=async(id)=>{
    const deletebyid=await Recipes.findByIdAndDelete(id)
    return deletebyid
}
