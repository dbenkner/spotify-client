import { ExternalUrl } from "./external_urls.class";

export class SimplifiedArist {
    exteranal_urls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;

    constructor(exteranal_urls:ExternalUrl, href: string, id: string, name: string, type:string, uri:string){
        this.exteranal_urls = exteranal_urls;
        this. href = href;
         this.id = id;
         this.name = name;
         this.type = type; 
         this.uri = uri;
    }
}