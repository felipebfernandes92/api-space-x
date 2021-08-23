import Launch from "../../core/entity/Launch";
import LaunchRepository from "../../core/repository/LaunchRepository";
import axios from "axios";

export default class LaunchRepositoryRestClient implements LaunchRepository {
    async getNextLaunch(): Promise<Launch> {
        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/next');      
        return new Launch(data.name, data.flight_number, data.date_utc, data.links.webcast, data.links.flickr.original);
    }

    async getLatestLaunch(): Promise<Launch> {
        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/latest');   
        return new Launch(data.name, data.flight_number, data.date_utc, data.links.webcast, data.links.flickr.original);
    }

    async getUpcomingLaunches(): Promise<Launch[]> {
        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
        let launches = [];
        data.map((launch: any) => {
            launches.push(new Launch(launch.name, launch.flight_number, launch.date_utc, launch.links.webcast, launch.links.flickr.original));
        })      
        return launches;
    }

    async getPastLaunches(): Promise<Launch[]> {
        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/past');
        let launches = [];
        data.map((launch: any) => {
            launches.push(new Launch(launch.name, launch.flight_number, launch.date_utc, launch.links.webcast, launch.links.flickr.original));
        })      
        return launches;
    }
    
}