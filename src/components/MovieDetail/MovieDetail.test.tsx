import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { Movie, genreItem } from "../../api/types";
import { MovieDetail } from "../MovieDetail/MovieDetail";

describe("[MovieDetail]", () => {

    /* const myPrivateFunc = jest.spyOn(Movie.prototype as any, 'privateFunction'); */
    const movie: Movie = {
    ID: 1,
    overview: "",
    title: "Movie 1", // Provide a title
    release_date: "2022-01-01",
    genreIds: [],
    imageURL: "path/to/image",
    backdropURL: "path/to/backdrop",
    voteCount: 2,
    voteAverage: 2,
    buildImgURL: jest.fn().mockReturnValue(""),
    renderVotes: jest.fn().mockReturnValue("5.0"), 
  };
  const isDetailOpen: boolean = true;
  const setIsDetailOpen = jest.fn();
  const genres: genreItem[] = [{id:1,name:""}];
  afterEach(() => {
    cleanup();
  });
  it("should render the MovieDetail component", () => {
    render(
      <MovieDetail
        movie={movie}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        genres={genres}
      ></MovieDetail>
    );

    const list = screen.getByTestId("movieDetail");
    expect(list).toHaveClass("movieDetail");
    
  });
});