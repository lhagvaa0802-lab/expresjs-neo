"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const createCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const category = await prisma_1.prisma.foodCategory.create({
            data: { categoryName },
        });
        res.status(201).json(category);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create category",
            error,
        });
    }
};
exports.createCategory = createCategory;
