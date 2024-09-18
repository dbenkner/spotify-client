export class Followers {
    href?: string | null = null;
    total: number;

    constructor(total:number){
        this.total = total;
    }
}