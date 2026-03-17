import { Router } from "express";
import { createUser } from "../controllers/user/create-user";
import { getUsers } from "../controllers/user/get-user";
import { getUsersById } from "../controllers/user/get-users-id"; 
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
