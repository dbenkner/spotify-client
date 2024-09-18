import { ExternalUrl } from "./external_urls.class";
import { Restriction } from "./restriction.class";
import { SimplifiedArist } from "./simplifiedArist.class";
import { Image } from "./image.class";

export class Album{
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrl;
    href:string;
    id:string;
    images:Image[];
    name:string;
    release_date: string;
    release_date_precision:string;
    restrictions:Restriction;
    type:string;
    uri:string;
    artists:SimplifiedArist[];

    constructor(album_type:string, total_tracks:number, available_markets:string[], external_urls: ExternalUrl, href:string, id:string, images:Image[], name:string, release_date:string, release_date_precision:string, 
        restrictions:Restriction, type:string, uri:string, artist:SimplifiedArist[]){
            this.album_type = album_type;
            this.total_tracks = total_tracks;
            this.available_markets = available_markets;
            this.external_urls = external_urls;
            this.href = href;
            this.id = id;
            this.images = images;
            this.name  = name;
            this.release_date = release_date;
            this.release_date_precision = release_date_precision;
            this.restrictions = restrictions;
            this.type = type;
            this.uri = uri;
            this.artists = artist;
        }
    }