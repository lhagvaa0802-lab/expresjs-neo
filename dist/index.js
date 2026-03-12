"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_routes_1 = __importDefault(require("./routes/food.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/foods", food_routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
