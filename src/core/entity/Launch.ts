export default class Launch {
    name: string;
    flightNumber: number;
    date: Date;
    video: string;
    images: Array<string>;

    constructor (name: string, flightNumber: number, date: Date, video: string, images: Array<string>) {
        this.name = name;
        this.flightNumber = flightNumber;
        this.date = date;
        this.video = video;
        this.images = images;
    }
}