export interface MovieItemFromAPI {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IMovie {
    renderVotes(): string;
};

export class Movie implements IMovie {
    readonly ID: number;
    public overview: string;
    public title: string;
    public imageURL: string;
    public voteAverage: number;
    public voteCount: number;

    constructor(movieFromAPI: MovieItemFromAPI) {
        this.ID = movieFromAPI.id;
        this.overview = movieFromAPI.overview;
        this.title = movieFromAPI.title;
        this.imageURL = this.buildImageURL(movieFromAPI.poster_path);
        this.voteAverage = movieFromAPI.vote_average
        this.voteCount = movieFromAPI.vote_count
    }

    private buildImageURL(url: string): string {
        return url;
    }

    public renderVotes(): string {
        return `${this.voteAverage.toFixed(1)} (${this.voteCount})`;
    }
}