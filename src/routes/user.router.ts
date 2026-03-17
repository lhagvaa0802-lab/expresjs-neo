import { Router } from "express";
import { createUser } from "../controllers/user/create-user";
import { getUser } from "../controllers/user/get-user";
import { getUsersById } from "../controllers/user/get-users-id";

const usersRouter = Router();

usersRouter.post("/", createUser);
usersRouter.get("/", getUser);
usersRouter.get("/:id", getUsersById);

export default usersRouter;
