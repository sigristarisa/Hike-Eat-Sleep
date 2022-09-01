import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import "./index.css";

const App: React.FC = () => {
  const [navBtnId, setNavBtnId] = useState<number>(0);

  const activateNavBtn = (index: number): string => {
    return navBtnId === index ? "active" : "inactive";
  };

  return (
    <div className='App'>
      <Header setNavBtnId={setNavBtnId} activateNavBtn={activateNavBtn} />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
