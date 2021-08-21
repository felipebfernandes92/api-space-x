"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetNextLaunch {
    constructor(launchRepository) {
        this.launchRepository = launchRepository;
    }
    async execute() {
        return this.launchRepository.getNextLaunch();
    }
}
exports.default = GetNextLaunch;
