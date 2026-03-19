"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const updateCategory = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { categoryName } = req.body;
        const category = await prisma_1.prisma.foodCategory.update({
            where: { id },
            data: { categoryName },
        });
        res.json(category);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update category",
            error,
        });
    }
};
exports.updateCategory = updateCategory;
