import express from "express";
import foodsRouter from "./routes/food.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/foods", foodsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
