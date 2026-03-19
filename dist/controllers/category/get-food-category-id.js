"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = void 0;
const prisma_1 = require("../../lib/prisma");
const getCategoryById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = await prisma_1.prisma.foodCategory.findUnique({
            where: { id },
            include: {
                foods: true,
            },
        });
        if (!category) {
            res.status(404).json({ message: "Category not found" });
            return;
        }
        res.json(category);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get category",
            error,
        });
    }
};
exports.getCategoryById = getCategoryById;
