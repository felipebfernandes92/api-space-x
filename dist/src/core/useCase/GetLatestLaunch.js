"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetLatestLaunch {
    constructor(launchRepository) {
        this.launchRepository = launchRepository;
    }
    async execute() {
        return this.launchRepository.getLatestLaunch();
    }
}
exports.default = GetLatestLaunch;
