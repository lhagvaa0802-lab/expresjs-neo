"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma_1.prisma.user.delete({
            where: { id },
        });
        res.json({
            message: "User deleted successfully",
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete user",
            error,
        });
    }
};
exports.deleteUser = deleteUser;
