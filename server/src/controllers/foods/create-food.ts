import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, categoryId } = req.body;

    if (
      !foodName ||
      price === undefined ||
      !image ||
      !ingredients ||
      categoryId === undefined
    ) {
      return res.status(400).json({
        message:
          "foodName, price, image, ingredients, and categoryId are required",
      });
    }

    const food = await prisma.food.create({
      data: {
        foodName,
        price: Number(price),
        image,
        ingredients,
        categoryId: Number(categoryId),
      },
    });

    return res.status(201).json({
      message: "Food created successfully",
      food,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create food",
      error,
    });
  }
};
