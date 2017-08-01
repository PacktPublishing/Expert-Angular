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

    restore(movie: Movie) {
        this.title = movie.title;
        this.year = movie.year;
    }

    public getTitle(): string {
        return this.title;
    }
    public getYear(): number {
        return this.year;
    }

    public setTitle(title: string) {
        this.title = title;
    }
    public setYear(year: number) {
        this.year = year;
    }

}