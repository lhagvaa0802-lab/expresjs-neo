import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategory = async (_req: Request, res: Response) => {
  try {
    const category = await prisma.foodCategory.findMany({
      include: { foods: true },
    });

    return res.status(200).json({
      message: "Foods fetched successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get foods",
      error,
    });
  }
};
