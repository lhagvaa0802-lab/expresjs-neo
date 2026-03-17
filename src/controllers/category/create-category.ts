import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    const category = await prisma.foodCategory.create({
      data: { categoryName },
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create category",
      error,
    });
  }
};
