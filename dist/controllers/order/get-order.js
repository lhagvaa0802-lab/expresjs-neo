"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrders = async (_req, res) => {
    try {
        const orders = await prisma_1.prisma.foodOrder.findMany({
            include: {
                foodOrderItems: {
                    include: {
                        food: true,
                    },
                },
            },
        });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get orders",
            error,
        });
    }
};
exports.getOrders = getOrders;
