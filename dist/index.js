"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const food_routes_1 = __importDefault(require("./routes/food.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use("/users", user_routes_1.default);
app.use("/foods", food_routes_1.default);
app.use("/categories", category_routes_1.default);
app.use("/orders", order_routes_1.default);
app.use("/", login_routes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
