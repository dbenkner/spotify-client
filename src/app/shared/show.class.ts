import { Copyright } from "./copyright.class";
import { ExternalUrl } from "./external_urls.class";
import { Image } from "./image.class";

export class Show {
    available_markets:string[];
    copyrights: Copyright[];
    description:string;
    html_description:string;
    explicit:Boolean;
    external__urls:ExternalUrl;
    href: string;
    id: string;
    images:Image[];
    is_externally_hosted:Boolean;
    languages:string[];
    media_type:string;
    name:string;
    publisher:string;
    type:string;
    uri:string;
    total_episodes:number;

    constructor(available_markets:string[], copyright:Copyright[], description:string, html_description:string, explicit:Boolean, external_urls:ExternalUrl, href:string, id:string, images:Image[], is_externally_hosted:Boolean, languages:string[],
        media_type:string, name:string, publisher:string, type:string, uri:string, total_episodes:number
    ){
        this.available_markets = available_markets;
        this.copyrights = copyright;
        this.description = description;
        this.html_description = html_description;
        this.explicit = explicit;
        this.external__urls = external_urls;
        this.href = href;
        this.id = id;
        this.images = images;
        this.is_externally_hosted = is_externally_hosted;
        this.languages = languages;
        this.media_type = media_type;
        this.name = name;
        this.publisher = publisher;
        this.type = type;
        this.uri = uri;
        this.total_episodes = total_episodes;
    }
}