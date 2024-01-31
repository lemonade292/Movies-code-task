import React from "react";
import "./styles/config.scss";
import { Route, Routes } from "react-router-dom";
import {  MoviesListConnected } from "./components/MoviesList/MoviesList";


const App: React.FC = () => {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<MoviesListConnected />} />
        </Routes>
      </div>

  );
};

export default App;
