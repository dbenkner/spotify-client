import { PlaylistTrack } from "./playlistTrack.class";
import { Track } from "./Track.class";

export class Tracks {
    href:string;
    limit:number;
    next?:string;
    offset:number;
    previous?:string;
    total: number;
    items:PlaylistTrack[];

    constructor(href:string, limit:number, offset:number, total:number, items:PlaylistTrack[]){
        this.href = href;
        this.limit = limit;
        this.offset = offset;
        this.total = total;
        this.items = items;
    }
}