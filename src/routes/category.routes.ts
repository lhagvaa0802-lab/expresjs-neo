import { Router } from "express";
import { createCategory } from "../controllers/category/create-category";
import { getCategories } from "../controllers/category/get-food-category";
import { getCategoryById } from "../controllers/category/get-food-category-id"; 
import { updateCategory } from "../controllers/category/update-category";
import { deleteCategory } from "../controllers/category/delete-category";

const categoryRouter = Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
