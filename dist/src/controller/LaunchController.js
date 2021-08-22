"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetNextLaunch_1 = __importDefault(require("../core/useCase/GetNextLaunch"));
const GetLatestLaunch_1 = __importDefault(require("../core/useCase/GetLatestLaunch"));
const LaunchRepositoryRestClient_1 = __importDefault(require("../infra/repository/LaunchRepositoryRestClient"));
class ParkingLotController {
    static async getNextLaunch() {
        const launchRepositoryRestClient = new LaunchRepositoryRestClient_1.default();
        const getNextLaunch = new GetNextLaunch_1.default(launchRepositoryRestClient);
        let launch = await getNextLaunch.execute();
        return launch;
    }
    static async getLatestLaunch() {
        const launchRepositoryRestClient = new LaunchRepositoryRestClient_1.default();
        const getLatestLaunch = new GetLatestLaunch_1.default(launchRepositoryRestClient);
        let launch = await getLatestLaunch.execute();
        return launch;
    }
}
exports.default = ParkingLotController;
