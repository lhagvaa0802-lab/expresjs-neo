"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = void 0;
const prisma_1 = require("../../lib/prisma");
const updateOrder = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;
        const order = await prisma_1.prisma.foodOrder.update({
            where: { id },
            data: { status },
        });
        res.json(order);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update order",
            error,
        });
    }
};
exports.updateOrder = updateOrder;
