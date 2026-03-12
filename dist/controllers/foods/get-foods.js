"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoods = async (_req, res) => {
    try {
        const foods = await prisma_1.prisma.food.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.status(200).json({
            message: "Foods fetched successfully",
            foods,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to get foods",
            error,
        });
    }
};
exports.getFoods = getFoods;
