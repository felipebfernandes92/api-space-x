import Launch from "../entity/Launch";

export default interface LaunchRepository {
    getNextLaunch() : Promise<Launch>;
    getLatestLaunch() : Promise<Launch>;
}