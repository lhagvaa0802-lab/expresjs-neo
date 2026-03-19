"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteOrder = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma_1.prisma.foodOrderItems.deleteMany({
            where: {
                foodOrderId: id,
            },
        });
        const order = await prisma_1.prisma.foodOrder.delete({
            where: { id },
        });
        res.json({
            message: "Order deleted successfully",
            order,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete order",
            error,
        });
    }
};
exports.deleteOrder = deleteOrder;
