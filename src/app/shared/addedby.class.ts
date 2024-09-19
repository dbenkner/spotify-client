import { ExternalUrl } from "./external_urls.class";
import { Followers } from "./followers.classs";

export class AddedBy {
    external_urls:ExternalUrl;
    followers:Followers;
    href:string;
    id:string;
    type:string;
    uri:string;

    constructor(external_urls:ExternalUrl, followers:Followers, href:string, id:string, type:string, uri:string){
        this.external_urls = external_urls;
        this.followers = followers;
        this.href = href;
        this.id = id;
        this.type = type;
        this.uri = uri;
    }
}