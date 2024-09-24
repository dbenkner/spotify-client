import { Actions } from "./actions.class";
import { Context } from "./context.class";
import { Device } from "./device.class";
import { Episode } from "./episode.class";
import { Track } from "./Track.class";

export class PlaybackState{
    device:Device;
    repeat_state:string;
    context:Context|null;
    timestamp:number;
    progress_ms:number;
    is_playing:number;
    item: Track|Episode|null;
    currently_playing_type:string;
    actions:Actions;


    constructor(device:Device, repeat_state:string, context:Context|null, timestamp:number, progress_ms:number, is_playing:number, item:Track|Episode|null, currently_playing_type:string, actions:Actions){
        this.device = device;
        this.repeat_state = repeat_state;
        this.context = context;
        this.timestamp = timestamp;
        this.progress_ms = progress_ms;
        this.is_playing = is_playing;
        this.item = item;
        this.currently_playing_type = currently_playing_type;
        this.actions = actions;
    }
}