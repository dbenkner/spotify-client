export class PlaylistCover{
    url:string;
    height:number|null;
    width:number|null;

    constructor(url:string, height:number|null, width:number|null){
        this.url = url;
        this.height = height;
        this.width = width;
    }
}