"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const prisma_1 = require("../../lib/prisma");
const getCategories = async (_req, res) => {
    try {
        const categories = await prisma_1.prisma.foodCategory.findMany({
            include: {
                foods: true,
            },
        });
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get categories",
            error,
        });
    }
};
exports.getCategories = getCategories;
