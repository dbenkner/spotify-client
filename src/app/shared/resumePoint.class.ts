export class ResumePoint{
    fully_played: Boolean;
    resume_position_ms: Number;


    constructor(fully_played:Boolean, resume_position_ms:Number){
        this.fully_played = fully_played;
        this.resume_position_ms = resume_position_ms;
    }
}