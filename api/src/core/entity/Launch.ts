export default class Launch {
    name: string;
    flightNumber: number;
    date: Date;

    constructor (name: string, flightNumber: number, date: Date) {
        this.name = name;
        this.flightNumber = flightNumber;
        this.date = date;
    }
}