import GetNextLaunch from "../core/useCase/GetNextLaunch";
import LaunchRepositoryRestClient from "../infra/repository/LaunchRepositoryRestClient";

export default class ParkingLotController {
	static async getNextLaunch () {
		const launchRepositoryRestClient = new LaunchRepositoryRestClient();
        const getNextLaunch = new GetNextLaunch(launchRepositoryRestClient);
        let launch = await getNextLaunch.execute();
        return launch;
	}
}