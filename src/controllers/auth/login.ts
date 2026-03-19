import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || password === undefined) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const comparing = await bcrypt.compare(password, user.password);
    if (!comparing) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    } else {
      console.log("true");

      const accessToken = jwt.sign(
        {
          data: {
            userId: user.id,
            email: user.email,
          },
        },
        process.env.JSONWEB!,
        { expiresIn: "1h" },
      );

      return res.status(200).json({ accessToken });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Login failed",
      error,
    });
  }
};
