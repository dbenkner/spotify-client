export class ExternalID {
    isrc: string;
    ean: string;
    upc: string;

    constructor(isrc: string, ean: string, upc: string){
        this.isrc = isrc;
        this. ean = ean;
        this.upc = upc;
    }
}