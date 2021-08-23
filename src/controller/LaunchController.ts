import GetNextLaunch from "../core/useCase/GetNextLaunch";
import GetLatestLaunch from "../core/useCase/GetLatestLaunch";
import GetUpcomingLaunches from "../core/useCase/GetUpcomingLaunches";
import GetPastLaunches from "../core/useCase/GetPastLaunches";
import LaunchRepositoryRestClient from "../infra/repository/LaunchRepositoryRestClient";

export default class ParkingLotController {
	static async getNextLaunch () {
		const launchRepositoryRestClient = new LaunchRepositoryRestClient();
        const getNextLaunch = new GetNextLaunch(launchRepositoryRestClient);
        let launch = await getNextLaunch.execute();
        return launch;
	}

    static async getLatestLaunch () {
		const launchRepositoryRestClient = new LaunchRepositoryRestClient();
        const getLatestLaunch = new GetLatestLaunch(launchRepositoryRestClient);
        let launch = await getLatestLaunch.execute();
        return launch;
	}

    static async getUpcomingLaunches () {
		const launchRepositoryRestClient = new LaunchRepositoryRestClient();
        const getUpcomingLaunches = new GetUpcomingLaunches(launchRepositoryRestClient);
        let launches = await getUpcomingLaunches.execute();
        return launches.slice(0, 5);
	}

    static async getPastLaunches () {
		const launchRepositoryRestClient = new LaunchRepositoryRestClient();
        const getPastLaunches = new GetPastLaunches(launchRepositoryRestClient);
        let launches = await getPastLaunches.execute();
        return launches.reverse().slice(0, 5);
	}
}