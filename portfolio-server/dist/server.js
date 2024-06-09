"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_ip_1 = __importDefault(require("express-ip"));
const app = (0, express_1.default)();
let visitor = {};
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
app.use((0, cors_1.default)());
app.use((0, express_ip_1.default)().getIpInfoMiddleware);
app.get('/', (req, res) => {
    const ip = req.headers['x-client-ip'];
    visitor[ip] = visitor[ip] ? visitor[ip] + 1 : 1;
    res.json({ visitor });
});
