"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrderById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const order = await prisma_1.prisma.foodOrder.findUnique({
            where: { id },
            include: {
                foodOrderItems: {
                    include: {
                        food: true,
                    },
                },
            },
        });
        if (!order) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get order",
            error,
        });
    }
};
exports.getOrderById = getOrderById;
