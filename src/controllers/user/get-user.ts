import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";

type Token = {
  data: {
    email: string;
    id: number;
  };
};

export const getUsers = async (_req: Request, res: Response) => {
  const { authorization } = _req.headers;
  const accessToken = authorization?.split(" ")[1];
  if (!accessToken) {
    res.send("no");
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JSONWEB);

    const users = await prisma.user.findMany({});

    return res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get users",
      error,
    });
  }
};
