import express from "express";
import recipeRoute from './routes/recipesRoute.js';
import mongoose from "mongoose";
import dotenv from "dotenv"; 


dotenv.config();

const app = express();


const DB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URI)
  .then(() => console.log("Successfully connected to MongoDB Atlas!"))
  .catch(err => {
    console.error("Atlas Connection Error: ", err.message);
  });

app.use(express.json());

app.use('/recipes', recipeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});