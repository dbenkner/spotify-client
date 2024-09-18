import { SimplifiedPlaylistObject } from "./simplifiedPlaylistObjects.class";

export class UsersPlaylists {
    href:string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: SimplifiedPlaylistObject[];
    
    constructor(href:string, limit:number, offset:number, previous:string, total:number, items:SimplifiedPlaylistObject[]){
        this.href = href;
        this.limit = limit;
        this.offset = offset;
        this.previous = previous;
        this. total = total;
        this.items = items;
    }
}