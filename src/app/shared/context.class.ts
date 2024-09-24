import { ExternalUrl } from "./external_urls.class";

export class Context {
    type:string;
    href:string;
    external_urls:ExternalUrl;
    uri:string;

    constructor(type:string, href:string, external_urls:ExternalUrl, uri:string){
        this.type = type;
        this.href = href;
        this.external_urls = external_urls;
        this.uri = uri;
    }
}