export class SongWrapper {
    constructor(
        public songs : { 
            data : {
                songs : Song[] 
            } 
        },
        public errors : any
    ){}
}

export default class Song{
    constructor (
        public song: string,
        public artist: string,
        public songReleaseDate: string,
        public playCount: number,
        public metricA: number,
        public metricB: number,
        public metricC: number,
        public metricD: number,
        public metricE: number,
        public metricF: number,
        public metricG: number,
        public metricH: number,
        public metricI: number,
        public metricJ: number,
        public metricK: number,
        public metricL: number,
        public metricM: number,
        public metricN: number,
        public metricO: number,
        public metricP: number

    ){

    }
}