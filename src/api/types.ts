export interface MovieItemFromAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: genreItem[];
  id: string;
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

export interface ShowItemFromAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: genreItem[];
  id: string;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;

  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type genreItem = {
  id: number;
  name: string;
};

interface IMovie {
  renderVotes(): string;
}

export class Content implements IMovie {
  public ID: string;
  public overview: string;
  public title: string;
  public imageURL: string;
  public voteAverage: number;
  public voteCount: number;
  public backdropURL: string;
  public genreIds: number[];
  public release_date: string;
  public genres: genreItem[];

  constructor(contentFromAPI: MovieItemFromAPI | ShowItemFromAPI) {
    this.ID = contentFromAPI.id;
    this.overview = contentFromAPI.overview;
    this.title =
      "title" in contentFromAPI ? contentFromAPI.title : contentFromAPI.name;

    this.imageURL = this.buildImgURL(contentFromAPI.poster_path);
    this.backdropURL = this.buildImgURL(contentFromAPI.backdrop_path);
    this.voteAverage = contentFromAPI.vote_average;
    this.voteCount = contentFromAPI.vote_count;
    this.genreIds = contentFromAPI.genre_ids;
    this.release_date = contentFromAPI.release_date;
    this.genres = contentFromAPI.genres;
  }

  public buildImgURL(url: string): string {
    return `https://image.tmdb.org/t/p/original${url}`;
  }

  public renderVotes(): string {
    return `${this.voteAverage.toFixed(1)}`;
  }
}
