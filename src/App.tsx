import React from "react";
import "./App.css";
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
          <Route path="/:movieID" element={<MovieDetail />} />
        </Routes>
      </div>
    </MoviesProvider>
  );
};

export default App;
