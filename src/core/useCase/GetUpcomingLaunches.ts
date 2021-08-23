import LaunchRepository from "../repository/LaunchRepository";

export default class GetUpcomingLaunches {
    launchRepository: LaunchRepository;

    constructor (launchRepository: LaunchRepository) {
        this.launchRepository = launchRepository;
    }

    async execute() {
        return this.launchRepository.getUpcomingLaunches();
    }
}