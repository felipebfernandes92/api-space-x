import Launch from "../../core/entity/Launch";
import LaunchRepository from "../../core/repository/LaunchRepository";
import axios from "axios";

export default class LaunchRepositoryRestClient implements LaunchRepository {
    async getNextLaunch(): Promise<Launch> {

        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/next');
        
        return new Launch(data.name, data.flight_number, data.date_utc);
    }

    async getLatestLaunch(): Promise<Launch> {

        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/latest');
        
        return new Launch(data.name, data.flight_number, data.date_utc);
    }
    
}