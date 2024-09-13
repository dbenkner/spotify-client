export class Image {
    url: string = "";
    height: number = 200;
    width: number = 200;

    constructor(url:string, height:number,width:number){
        this.height = height;
        this.url = url;
        this.width = width;
    };
}