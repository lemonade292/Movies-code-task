import React from "react";
import "./styles/config.scss";
import { Route, Routes } from "react-router-dom";
import { ContentListConnected } from "./components/ContentList/ContentList";
import { ContentDetailPage } from "./components/ContentDetailPage/ContentDetailPage";


const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContentListConnected />} />
        <Route path="/:platform/:contentID" element={< ContentDetailPage/>} />
      </Routes>
    </div>
  );
};

export default App;
