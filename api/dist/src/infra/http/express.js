"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressAdapter_1 = __importDefault(require("../../adapter/ExpressAdapter"));
const LaunchController_1 = __importDefault(require("../../controller/LaunchController"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
app.get('/', ExpressAdapter_1.default.create(LaunchController_1.default.getNextLaunch));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
