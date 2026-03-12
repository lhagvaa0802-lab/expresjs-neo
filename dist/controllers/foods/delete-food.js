"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteFood = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid food id",
            });
        }
        const existingFood = await prisma_1.prisma.food.findUnique({
            where: { id },
        });
        if (!existingFood) {
            return res.status(404).json({
                message: "Food not found",
            });
        }
        await prisma_1.prisma.food.delete({
            where: { id },
        });
        return res.status(200).json({
            message: "Food deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to delete food",
            error,
        });
    }
};
exports.deleteFood = deleteFood;
