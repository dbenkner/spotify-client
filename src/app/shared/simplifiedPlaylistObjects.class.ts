import { Image } from "./image.class";
export class SimplifiedPlaylistObject {
    collaborative: boolean;
    description: string;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: object;
    public?: boolean;
    snapshot_id: string;
    tracks:{href:string, total:number};
    type:string;
    uri:string;

    constructor(collaborative:boolean, description:string, hrefPlaylist:string, id:string, images:Image[], name:string,owner:object, snapshot_id:string, href:string, total:number, type:string, uri:string){
        this.collaborative = collaborative;
        this.description = description;
        this.href = hrefPlaylist;
        this.id = id;
        this.images = images;
        this.name = name;
        this.owner = owner;
        this.snapshot_id = snapshot_id;
        this.tracks = {
            href, 
            total};
        this.type = type;
        this.uri = uri;
    }
}