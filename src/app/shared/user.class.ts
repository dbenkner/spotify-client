import { Image } from "./image.class";
export class UserProfile {
    country?: string;
    display_name: string;
    email?: string;
    explicit_content?: {
        filter_enabled: boolean
        filter_locked: boolean
    };
    followers?: {href: string; total:number};
    external_urls?: {spotify:string};
    href?: string;
    id?: string;
    images: Image[];
    product?: string;
    type?: string;
    uri?: string;

    constructor(country:string, display_name:string, email:string, filter_enabled:boolean, filter_locked:boolean, external_urls:{spotify:string}, href:string, id:string, images:Image[] ,product:string ,type:string ,uri:string, followers:{href:string, total:number}){
        this.country = country;
        this.display_name = display_name;
        this.email = email;
        this.explicit_content = {
            filter_enabled,
            filter_locked
        };
        this.followers = followers;
        this.external_urls = external_urls;
        this.href = href;
        this.id = id;
        this.images = images;
        this.product = product;
        this.type = type;
        this.uri = uri;
    }
}