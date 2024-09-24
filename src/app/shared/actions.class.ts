export class Actions {
    interrupting_playback? : boolean;
    pausing? :boolean;
    resuming?: boolean;
    seeking?: boolean;
    skipping_next?:boolean;
    toggling_repeat_context?:boolean;
    toggling_shuffle?:boolean;
    toggling_repeat_track?:boolean;
    transfering_playback?:boolean;

    constructor(){}
}