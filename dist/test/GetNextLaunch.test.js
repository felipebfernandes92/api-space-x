"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const GetNextLaunch_1 = __importDefault(require("../src/core/useCase/GetNextLaunch"));
const LaunchRepositoryRestClient_1 = __importDefault(require("../src/infra/repository/LaunchRepositoryRestClient"));
test("Should be from the future", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient_1.default();
    const getNextLaunch = new GetNextLaunch_1.default(launchRepositoryRestClient);
    const launch = await getNextLaunch.execute();
    expect(date_fns_1.isFuture(new Date(launch.date))).toBe(true);
});
