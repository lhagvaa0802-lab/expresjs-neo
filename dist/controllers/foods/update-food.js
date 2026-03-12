"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFood = void 0;
const prisma_1 = require("../../lib/prisma");
const updateFood = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { foodName, price, image, ingredients, category } = req.body;
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
        const updatedFood = await prisma_1.prisma.food.update({
            where: { id },
            data: {
                ...(foodName !== undefined && { foodName }),
                ...(price !== undefined && { price: Number(price) }),
                ...(image !== undefined && { image }),
                ...(ingredients !== undefined && { ingredients }),
                ...(category !== undefined && { category }),
            },
        });
        return res.status(200).json({
            message: "Food updated successfully",
            food: updatedFood,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to update food",
            error,
        });
    }
};
exports.updateFood = updateFood;
