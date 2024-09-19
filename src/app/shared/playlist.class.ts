import { ExternalUrl } from "./external_urls.class";
import { Followers } from "./followers.classs";
import { Image } from "./image.class";
import { Owner } from "./owner.class";
import { Tracks } from "./tracks.class";

export class Playlist{
    collaborative:boolean;
    description?: string;
    external_urls:ExternalUrl;
    followers:Followers;
    href:string;
    images:Image[];
    name:string;
    owner:Owner;
    public:boolean;
    snapshot_id:string;
    tracks:Tracks;
    type:string;
    uri:string;

    constructor(collaborative:boolean, external_urls:ExternalUrl, followers:Followers, href:string, images:Image[], name:string, owner:Owner,publicCons:boolean, snapshot_id:string, tracks:Tracks, type:string, uri:string){
        this.collaborative = collaborative;
        this. external_urls = external_urls;
        this.followers = followers;
        this.href = href;
        this.images = images;
        this.name = name;
        this.owner = owner;
        this.public = publicCons;
        this.snapshot_id = snapshot_id;
        this.tracks = tracks;
        this.type = type;
        this.uri = uri;
    }
}