import GetNextLaunch from "../core/useCase/GetNextLaunch";
import GetLatestLaunch from "../core/useCase/GetLatestLaunch";
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
}