import { render, cleanup, screen } from "@testing-library/react";
import { ContentList } from "./ContentList";
import { Content } from "../../api/types";

describe("[ContentList]", () => {
  const movies: Content[] = [];
  const shows: Content[] = [];
  const fetchMoviesAction = jest.fn();
  const fetchGenresAction = jest.fn();
  const fetchShowsAction = jest.fn();
  afterEach(() => {
    cleanup();
  });
  it("should render the ContentList component", () => {
    render(
      <ContentList
        movies={movies}
        shows={shows}
        fetchMoviesAction={fetchMoviesAction}
        fetchGenresAction={fetchGenresAction}
        fetchShowsAction={fetchShowsAction}
      ></ContentList>
    );

    const list = screen.getByTestId("moviesList");
    expect(list).toHaveClass("moviesList");
  });
});
