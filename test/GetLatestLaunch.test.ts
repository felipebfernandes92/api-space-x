import { isPast } from "date-fns";
import GetLatestLaunch from "../src/core/useCase/GetLatestLaunch";
import LaunchRepositoryRestClient from "../src/infra/repository/LaunchRepositoryRestClient";

test("Should be from the past", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient();
    const getLatestLaunch = new GetLatestLaunch(launchRepositoryRestClient);
    const launch = await getLatestLaunch.execute();
    expect(isPast(new Date(launch.date))).toBe(true);
});