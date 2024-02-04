import { render,fireEvent,cleanup,screen } from "@testing-library/react"
import { MoviesList } from "./MoviesList"
import { Movie } from "../../api/types";

describe("[MoviesList]",()=>{
    const movies:Movie[] = []
    const fetchMoviesAction = jest.fn()
    const fetchGenresAction = jest.fn()
    afterEach(()=>{
        cleanup()
    });
    it("should render the MoviesList component", ()=>{
        render(<MoviesList movies={movies} fetchMoviesAction={fetchMoviesAction} fetchGenresAction={fetchGenresAction}></MoviesList>)
        
        const list = screen.getByTestId("moviesList")
        expect(list).toHaveClass('moviesList')
    })
})

