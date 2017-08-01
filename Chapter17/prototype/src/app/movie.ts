import { Prototype } from "./prototype";

export class Movie implements Prototype {

    private title: string;
    private year: number;
    
    public constructor();
    public constructor(title?: string, year?: number);

    public constructor(title?: string, year?: number) {
        if (title == undefined || year == undefined) {
            //do the expensive creation
        } else {
            this.title = title;
            this.year = year;
        }
    }

    clone(): Movie {
        return new Movie(this.title, this.year);
    }
}