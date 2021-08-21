import Launch from "../../core/entity/Launch";
import LaunchRepository from "../../core/repository/LaunchRepository";
import axios from "axios";

export default class LaunchRepositoryApi implements LaunchRepository {
    async getNextLaunch(): Promise<Launch> {

        const { data } = await axios.get('https://api.spacexdata.com/v4/launches/next');
        
        return new Launch(data.name, data.flight_number, data.date_utc);
        
        // .then(function (response) {
        //     return new Launch(response.data.name, response.data.flight_number);
        // })
        // .catch(function () {
        //     return Promise.reject('Erro ao consultar os próximos lançamentos.');
        // });

        // return Promise.reject('Erro ao consultar os próximos lançamentos.');
    }
    
}