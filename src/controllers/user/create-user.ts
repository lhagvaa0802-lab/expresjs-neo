import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, age, phoneNumber } = req.body;

    if (!email || password === undefined || !age || !phoneNumber) {
      return res.status(400).json({
        message: "email, password,and age, phoneNumber are required",
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
        age,
        phoneNumber,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create user",
      error,
    });
  }
};
