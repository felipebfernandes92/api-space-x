import { isPast } from "date-fns";
import GetPastLaunches from "../src/core/useCase/GetPastLaunches";
import LaunchRepositoryRestClient from "../src/infra/repository/LaunchRepositoryRestClient";

test("Should be from the past", async function () {
    const launchRepositoryRestClient = new LaunchRepositoryRestClient();
    const getPastLaunches = new GetPastLaunches(launchRepositoryRestClient);
    const launches = await getPastLaunches.execute();
    
    launches.map((launch: any) => {
        expect(isPast(new Date(launch.date))).toBe(true);
    });
    
});