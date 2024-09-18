import { ExternalUrl } from "./external_urls.class";
import { Restriction } from "./restriction.class";
import { ResumePoint } from "./resumePoint.class";
import { Show } from "./show.class";
import { Image } from "./image.class";

export class Episode {
    audio_preview_url?:string;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: Boolean;
    external_urls:ExternalUrl;
    href:string;
    id:string;
    images:Image[];
    is_playable:Boolean;
    languages:string[];
    name:string;
    release_date:string;
    release_date_precision:string;
    resume_point:ResumePoint;
    type:string;
    uri:string;
    restrictions:Restriction;
    show:Show;

    constructor(description: string, html_description:string, duration_ms:number, explicit:Boolean, external_urls:ExternalUrl, href:string, id:string, images:Image[], is_playable:Boolean, languages:string[], name: string, release_date:string,
        release_date_percision:string, resume_point:ResumePoint, type:string, uri:string, restrictions:Restriction, show:Show){
            this.description = description;
            this.html_description = html_description;
            this.duration_ms = duration_ms;
            this.explicit = explicit;
            this.external_urls = external_urls;
            this.href = href;
            this.id = id;
            this.images = images;
            this.is_playable = is_playable;
            this.languages = languages;
            this.name = name;
            this.release_date = release_date;
            this. release_date_precision = release_date_percision;
            this. resume_point = resume_point;
            this.type = type;
            this.uri = uri;
            this.restrictions = restrictions;
            this.show = show;  
    }
}