"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Launch_1 = __importDefault(require("../../core/entity/Launch"));
const axios_1 = __importDefault(require("axios"));
class LaunchRepositoryRestClient {
    async getNextLaunch() {
        const { data } = await axios_1.default.get('https://api.spacexdata.com/v4/launches/next');
        return new Launch_1.default(data.name, data.flight_number, data.date_utc, data.links.webcast, data.links.flickr.original);
    }
    async getLatestLaunch() {
        const { data } = await axios_1.default.get('https://api.spacexdata.com/v4/launches/latest');
        return new Launch_1.default(data.name, data.flight_number, data.date_utc, data.links.webcast, data.links.flickr.original);
    }
    async getUpcomingLaunches() {
        const { data } = await axios_1.default.get('https://api.spacexdata.com/v4/launches/upcoming');
        let launches = [];
        data.map((launch) => {
            launches.push(new Launch_1.default(launch.name, launch.flight_number, launch.date_utc, launch.links.webcast, launch.links.flickr.original));
        });
        return launches;
    }
    async getPastLaunches() {
        const { data } = await axios_1.default.get('https://api.spacexdata.com/v4/launches/past');
        let launches = [];
        data.map((launch) => {
            launches.push(new Launch_1.default(launch.name, launch.flight_number, launch.date_utc, launch.links.webcast, launch.links.flickr.original));
        });
        return launches;
    }
}
exports.default = LaunchRepositoryRestClient;
