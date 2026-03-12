"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFood = void 0;
const prisma_1 = require("../../lib/prisma");
const createFood = async (req, res) => {
    try {
        const { foodName, price, image, ingredients, category } = req.body;
        if (!foodName ||
            price === undefined ||
            !image ||
            !ingredients ||
            !category) {
            return res.status(400).json({
                message: "foodName, price, image, ingredients, and category are required",
            });
        }
        const food = await prisma_1.prisma.food.create({
            data: {
                foodName,
                price: Number(price),
                image,
                ingredients,
                category,
            },
        });
        return res.status(201).json({
            message: "Food created successfully",
            food,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to create food",
            error,
        });
    }
};
exports.createFood = createFood;
