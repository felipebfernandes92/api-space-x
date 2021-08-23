import { isFuture } from "date-fns";
import GetUpcomingLaunches from "../src/core/useCase/GetUpcomingLaunches";
import LaunchRepositoryRestClient from "../src/infra/repository/LaunchRepositoryRestClient";

test("Should be from the future", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient();
    const getUpcomingLaunches = new GetUpcomingLaunches(launchRepositoryRestClient);
    const launches = await getUpcomingLaunches.execute();
    
    launches.map((launch: any) => {
        expect(isFuture(new Date(launch.date))).toBe(true);
    });
    
});