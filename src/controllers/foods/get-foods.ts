import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getFoods = async (_req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      message: "Foods fetched successfully",
      foods,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get foods",
      error,
    });
  }
};
