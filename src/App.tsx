import React from "react";
import "./styles/config.scss";
import { Route, Routes } from "react-router-dom";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { MoviesProvider } from "./components/__providers__/MoviesProvider";

const App: React.FC = () => {
  return (
    <MoviesProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MoviesList />} />
        </Routes>
      </div>
    </MoviesProvider>
  );
};

export default App;
