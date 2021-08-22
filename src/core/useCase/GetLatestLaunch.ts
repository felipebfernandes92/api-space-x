import LaunchRepository from "../repository/LaunchRepository";

export default class GetLatestLaunch {
    launchRepository: LaunchRepository;

    constructor (launchRepository: LaunchRepository) {
        this.launchRepository = launchRepository;
    }

    async execute() {
        return this.launchRepository.getLatestLaunch();
    }
}