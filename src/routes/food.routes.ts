import { Router } from "express";
import { createFood } from "../controllers/foods/create-food";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-id";
import { updateFood } from "../controllers/foods/update-food";
import { deleteFood } from "../controllers/foods/delete-food";


const foodsRouter = Router();

foodsRouter.post("/", createFood);
foodsRouter.get("/", getFoods);
foodsRouter.get("/:id", getFoodById);
foodsRouter.put("/:id", updateFood);
foodsRouter.delete("/:id", deleteFood);


export default foodsRouter;
