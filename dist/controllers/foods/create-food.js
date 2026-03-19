"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFood = void 0;
const prisma_1 = require("../../lib/prisma");
const createFood = async (req, res) => {
    try {
        const { foodName, price, image, ingredients, categoryId } = req.body;
        if (!foodName || !price || !image || !ingredients || !categoryId) {
            return res.status(400).json({
                message: "foodName, price, image, ingredients, and categoryId are required",
            });
        }
        const food = await prisma_1.prisma.food.create({
            data: {
                foodName,
                price: Number(price),
                image,
                ingredients,
                categoryId: Number(categoryId),
            },
        });
        res.status(201).json({
            message: "Food created successfully",
            food,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create food",
            error,
        });
    }
};
exports.createFood = createFood;
