import { render, cleanup, screen } from "@testing-library/react";
import { Content, genreItem } from "../../api/types";
import { ContentDetail } from "./ContentDetail";

describe("[ContentDetail]", () => {
  const movie: Content = {
    ID: "1",
    overview: "",
    title: "Movie 1", // Provide a title
    release_date: "2022-01-01",
    genreIds: [],
    genres:[],
    imageURL: "path/to/image",
    backdropURL: "path/to/backdrop",
    voteCount: 2,
    voteAverage: 2,
    buildImgURL: jest.fn().mockReturnValue(""),
    renderVotes: jest.fn().mockReturnValue("5.0"),
  };
  const isDetailOpen: boolean = true;
  const setIsDetailOpen = jest.fn();
  const genres: genreItem[] = [{ id: 1, name: "" }];
  afterEach(() => {
    cleanup();
  });
  it("should render the ContentDetail component", () => {
    render(
      <ContentDetail
        movie={movie}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        genres={genres}
      ></ContentDetail>
    );

    const list = screen.getByTestId("movieDetail");
    expect(list).toHaveClass("movieDetail");
  });
});
