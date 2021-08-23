"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const GetLatestLaunch_1 = __importDefault(require("../src/core/useCase/GetLatestLaunch"));
const LaunchRepositoryRestClient_1 = __importDefault(require("../src/infra/repository/LaunchRepositoryRestClient"));
test("Should be from the past", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient_1.default();
    const getLatestLaunch = new GetLatestLaunch_1.default(launchRepositoryRestClient);
    const launch = await getLatestLaunch.execute();
    expect(date_fns_1.isPast(new Date(launch.date))).toBe(true);
});
