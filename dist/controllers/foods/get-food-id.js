"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodById = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoodById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid food id",
            });
        }
        const food = await prisma_1.prisma.food.findUnique({
            where: { id },
        });
        if (!food) {
            return res.status(404).json({
                message: "Food not found",
            });
        }
        return res.status(200).json({
            message: "Food fetched successfully",
            food,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to get food",
            error,
        });
    }
};
exports.getFoodById = getFoodById;
