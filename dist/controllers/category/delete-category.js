"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteCategory = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = await prisma_1.prisma.foodCategory.delete({
            where: { id },
        });
        res.json({
            message: "Category deleted successfully",
            category,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete category",
            error,
        });
    }
};
exports.deleteCategory = deleteCategory;
