import {addrecipes,findAllrecipes,findrecipesbyId,updaterecipe,deleterecipe} from '../services/recipeservices.js'

export const createRecipe=async(req,res)=>{
    const recipe=await addrecipes(req.body)
    res.status(201)  //for create status code
    res.json(recipe)
}

export const getAllRecipes=async(req,res)=>{
    const recipes=await findAllrecipes()
    res.status(200)
    res.json(recipes)
}

export const getRecipeById=async(req,res)=>{
    const recipedetails=await findrecipesbyId(req.params.id)
    if(!recipedetails){
         res.status(404)
         res.json({message:'recipe not found'})
    }
    res.status(200)
    res.json(recipedetails)
}

export const updateRecipe=async(req,res)=>{
    const updaterecipedetail=await updaterecipe(req.params.id,req.body)
    res.status(200)
    res.json(updaterecipedetail)
}
export const deleteRecipe=async(req,res)=>{
    await deleterecipe(req.params.id)
    res.status(204)
    res.json({message:'recipe is deleted'})
}