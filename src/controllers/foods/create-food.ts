import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;

    if (
      !foodName ||
      price === undefined ||
      !image ||
      !ingredients ||
      !category
    ) {
      return res.status(400).json({
        message:
          "foodName, price, image, ingredients, and category are required",
      });
    }

    const food = await prisma.food.create({
      data: {
        foodName,
        price: Number(price),
        image,
        ingredients,
        category,
      },
    });

    return res.status(201).json({
      message: "Food created successfully",
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create food",
      error,
    });
  }
};
