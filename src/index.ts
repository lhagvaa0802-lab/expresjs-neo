import express from "express";
import foodsRouter from "./routes/food.routes";
import usersRouter from "./routes/user.router";

const app = express();
const port = 3002;

app.use(express.json());

app.use("/foods", foodsRouter);
app.use("/category", foodsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
