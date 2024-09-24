export class Device {
    id:string;
    is_active:boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name:string;
    type:string;
    volume_percent:number;
    supports_volume:boolean;

    constructor(id:string, is_active:boolean, is_private_session:boolean, is_restricted:boolean, name:string, type:string, volume_percent:number, supports_volume:boolean){
        this.id = id;
        this.is_active = is_active;
        this.is_private_session = is_private_session;
        this.is_restricted = is_restricted;
        this.name = name;
        this.type = type;
        this.volume_percent = volume_percent;
        this.supports_volume = supports_volume;
    }
}