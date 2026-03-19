"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const prisma_1 = require("../../lib/prisma");
const createOrder = async (req, res) => {
    try {
        const { status, items } = req.body;
        const totalPriceValue = await calculateTotalPrice(items);
        const order = await prisma_1.prisma.foodOrder.create({
            data: {
                status,
                totalPrice: totalPriceValue,
                foodOrderItems: {
                    create: items.map((item) => ({
                        quantity: item.quantity,
                        food: {
                            connect: { id: item.foodId },
                        },
                    })),
                },
            },
            include: {
                foodOrderItems: {
                    include: {
                        food: true,
                    },
                },
            },
        });
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create order",
            error,
        });
    }
};
exports.createOrder = createOrder;
const calculateTotalPrice = async (items) => {
    const foodIds = items.map((item) => item.foodId);
    const foods = await prisma_1.prisma.food.findMany({
        where: {
            id: { in: foodIds },
        },
    });
    let total = 0;
    for (const item of items) {
        const food = foods.find((f) => f.id === item.foodId);
        if (food) {
            total += food.price * item.quantity;
        }
    }
    return total;
};
