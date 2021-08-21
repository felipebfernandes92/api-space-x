"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Launch_1 = __importDefault(require("../../core/entity/Launch"));
class LaunchRepositoryApi {
    getNextLaunch() {
        return Promise.resolve(new Launch_1.default('ABC', 123));
    }
}
exports.default = LaunchRepositoryApi;
