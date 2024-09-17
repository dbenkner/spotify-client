export class Image {
    url: string;
    height: number;
    width: number;

    constructor(url:string, height:number,width:number){
        this.height = height;
        this.url = url;
        this.width = width;
    };
}