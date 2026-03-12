import express, { Request, Response } from "express";
import { prisma } from "./lib/prisma";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const users = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });

  res.json({ users });
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { email, password, age } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        password,
        age: Number(age),
      },
    });
    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    console.log(req.body);

    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
