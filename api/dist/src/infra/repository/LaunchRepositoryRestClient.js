"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Launch_1 = __importDefault(require("../../core/entity/Launch"));
const axios_1 = __importDefault(require("axios"));
class LaunchRepositoryApi {
    async getNextLaunch() {
        const { data } = await axios_1.default.get('https://api.spacexdata.com/v4/launches/next');
        return new Launch_1.default(data.name, data.flight_number, data.date_utc);
        // .then(function (response) {
        //     return new Launch(response.data.name, response.data.flight_number);
        // })
        // .catch(function () {
        //     return Promise.reject('Erro ao consultar os próximos lançamentos.');
        // });
        // return Promise.reject('Erro ao consultar os próximos lançamentos.');
    }
}
exports.default = LaunchRepositoryApi;
