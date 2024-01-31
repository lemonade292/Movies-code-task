import { MOVIE_GENRE_IDS } from "../constants";

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

export class Movie implements IMovie{
    readonly ID: number;
    public overview: string;
    public title: string;
    public imageURL: string;
    public voteAverage: number;
    public voteCount: number;
    public backdropURL: string;
    public genreList: string[];
    public release_date: string;

    constructor(movieFromAPI: MovieItemFromAPI) {
        this.ID = movieFromAPI.id;
        this.overview = movieFromAPI.overview;
        this.title = movieFromAPI.title;                
        this.imageURL = this.buildImgURL(movieFromAPI.poster_path)      
        this.backdropURL = this.buildImgURL(movieFromAPI.backdrop_path)      
        this.voteAverage = movieFromAPI.vote_average
        this.voteCount = movieFromAPI.vote_count
        this.genreList = this.buildGenreList(movieFromAPI.genre_ids)
        this.release_date= movieFromAPI.release_date
    }

    private buildImgURL(url:string): string {
        return `https://image.tmdb.org/t/p/original${url}`;
    }
    private buildGenreList(idList:number[]): string[]  {
        const genreList = idList.map(id => {
           const genre = MOVIE_GENRE_IDS.find(genre => genre.id === id)
           if (!genre) {
            return ''
           }
           return genre?.name
        })
        if (!genreList) {
            return []
        } 
        return genreList
    }

    public renderVotes(): string {
        return `${this.voteAverage.toFixed(1)}`;
    }
}

