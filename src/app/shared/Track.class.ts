import { Album } from "./album.class";
import { ExternalID } from "./exteranalID.class";
import { ExternalUrl } from "./external_urls.class";
import { Restriction } from "./restriction.class";
import { SimplifiedArist } from "./simplifiedArist.class";

export class Track {
    album:Album;
    artists:SimplifiedArist;
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit:Boolean;
    external_ids:ExternalID;
    external_urls:ExternalUrl;
    href:string;
    id:string;
    is_playable:Boolean;
    linked_from:Object;
    restrictons:Restriction;
    name:string;
    popularity:number;
    preview_url?:string;
    track_number:number;
    type:string;
    uri:string;
    is_local:Boolean;

    constructor(album:Album, artists:SimplifiedArist, available_markets:string[], disc_number:number, duration_ms:number, explicit:Boolean, external_ids:ExternalID, external_urls:ExternalUrl,href:string, id:string, isplayable:Boolean,
        linked_from:Object, restrictions:Restriction, name:string, popularity:number, track_number:number, type:string, uri:string, is_local:Boolean
    ){
        this.album = album;
        this.artists = artists;
        this.available_markets = available_markets;
        this.disc_number = disc_number;
        this.duration_ms = duration_ms;
        this.explicit = explicit;
        this.external_ids = external_ids;
        this.external_urls =  external_urls;
        this. href = href;
        this.id = id;
        this. is_playable = isplayable;
        this.linked_from = linked_from;
        this.restrictons = restrictions;
        this.name = name;
        this.popularity = popularity;
        this.track_number = track_number;
        this.type = type;
        this.uri = uri;
        this.is_local = is_local;
    }
}