"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoods = async (_req, res) => {
    try {
        const foods = await prisma_1.prisma.food.findMany({
            include: {
                category: true,
            },
        });
        res.json(foods);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get foods",
            error,
        });
    }
};
exports.getFoods = getFoods;
