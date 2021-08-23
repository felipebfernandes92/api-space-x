"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetUpcomingLaunches {
    constructor(launchRepository) {
        this.launchRepository = launchRepository;
    }
    async execute() {
        return this.launchRepository.getPastLaunches();
    }
}
exports.default = GetUpcomingLaunches;
