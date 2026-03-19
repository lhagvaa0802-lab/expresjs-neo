"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = async (req, res) => {
    try {
        const { email, password, age, phoneNumber } = req.body;
        if (!email || password === undefined || !age || !phoneNumber) {
            return res.status(400).json({
                message: "email, password,and age, phoneNumber are required",
            });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                age,
                phoneNumber,
            },
        });
        return res.status(201).json({
            message: "User created successfully",
            user,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create user",
            error,
        });
    }
};
exports.createUser = createUser;
