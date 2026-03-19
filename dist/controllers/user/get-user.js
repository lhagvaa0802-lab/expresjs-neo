"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const prisma_1 = require("../../lib/prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = async (_req, res) => {
    const { authorization } = _req.headers;
    const accessToken = authorization?.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({
            message: "Access token is required",
        });
    }
    try {
        const jwtSecret = process.env.JSONWEB;
        if (!jwtSecret) {
            return res.status(500).json({
                message: "JWT secret is not configured",
            });
        }
        jsonwebtoken_1.default.verify(accessToken, jwtSecret);
        const users = await prisma_1.prisma.user.findMany({});
        return res.status(200).json({
            message: "Users fetched successfully",
            users,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "Failed to verify access token",
            error,
        });
    }
};
exports.getUsers = getUsers;
