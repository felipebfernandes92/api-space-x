import { isFuture } from "date-fns";
import GetNextLaunch from "../src/core/useCase/GetNextLaunch";
import LaunchRepositoryRestClient from "../src/infra/repository/LaunchRepositoryRestClient";

test("Should be from the future", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient();
    const getNextLaunch = new GetNextLaunch(launchRepositoryRestClient);
    const launch = await getNextLaunch.execute();
    expect(isFuture(new Date(launch.date))).toBe(true);
});