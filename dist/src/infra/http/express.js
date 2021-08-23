"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressAdapter_1 = __importDefault(require("../../adapter/ExpressAdapter"));
const LaunchController_1 = __importDefault(require("../../controller/LaunchController"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/launches/next', ExpressAdapter_1.default.create(LaunchController_1.default.getNextLaunch));
app.get('/launches/latest', ExpressAdapter_1.default.create(LaunchController_1.default.getLatestLaunch));
app.get('/launches/upcoming', ExpressAdapter_1.default.create(LaunchController_1.default.getUpcomingLaunches));
app.get('/launches/past', ExpressAdapter_1.default.create(LaunchController_1.default.getPastLaunches));
app.listen(process.env.PORT || 8080);
