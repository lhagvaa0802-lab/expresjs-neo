"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || password === undefined) {
            return res.status(400).json({
                message: "email and password are required",
            });
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        const comparing = await bcrypt_1.default.compare(password, user.password);
        if (!comparing) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }
        else {
            const accessToken = jsonwebtoken_1.default.sign({
                data: {
                    userId: user.id,
                    email: user.email,
                },
            }, process.env.JSONWEB, { expiresIn: "1h" });
            return res.status(200).json({ accessToken });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Login failed",
            error,
        });
    }
};
exports.login = login;
