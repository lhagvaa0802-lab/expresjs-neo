"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const prisma_1 = require("../../lib/prisma");
const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { email, password, age, phoneNumber } = req.body;
        const user = await prisma_1.prisma.user.update({
            where: { id },
            data: {
                email,
                password,
                age,
                phoneNumber,
            },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update user",
            error,
        });
    }
};
exports.updateUser = updateUser;
