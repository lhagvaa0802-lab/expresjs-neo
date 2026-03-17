import { Router } from "express";
import { createOrder } from "../controllers/order/create-order";
import { getOrders } from "../controllers/order/get-order"; 
import { getOrderById } from "../controllers/order/get-order-id";
import { updateOrder } from "../controllers/order/update-order";
import { deleteOrder } from "../controllers/order/delete-order";

const orderRouter = Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
