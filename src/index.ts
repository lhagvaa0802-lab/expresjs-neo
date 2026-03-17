import express from "express";
import userRouter from "./routes/user.routes";
import foodsRouter from "./routes/food.routes";
import categoryRouter from "./routes/category.routes";
import orderRouter from "./routes/order.routes";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/users", userRouter);
app.use("/foods", foodsRouter);
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
