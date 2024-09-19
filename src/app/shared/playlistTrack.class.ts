import { AddedBy } from "./addedby.class";
import { Episode } from "./episode.class";
import { Track } from "./Track.class";

export class PlaylistTrack {
    added_at:string;
    added_by:AddedBy;
    is_local:boolean;
    track:Track | Episode;
    constructor(added_at:string, added_by:AddedBy, is_local:boolean, track: Track|Episode){
        this.added_at = added_at;
        this.added_by = added_by;
        this. is_local = is_local;
        this.track = track;
    }
}