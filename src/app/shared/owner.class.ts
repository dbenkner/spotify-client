import { ExternalUrl } from "./external_urls.class";
import { Followers } from "./followers.classs";

export class Owner {
    external_urls: ExternalUrl;
    followers: Followers;
    href: string;
    type: string;
    uri: string;
    display_name?:string|null;

    constructor(exteranl_urls: ExternalUrl, followers:Followers, href:string, type:string, uri:string){
        this.external_urls = exteranl_urls;
        this.followers = followers;
        this.href = href;
        this.type = type;
        this.uri = uri;
    }
}