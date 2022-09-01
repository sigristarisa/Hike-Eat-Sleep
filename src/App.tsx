import React, { useState } from "react";
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
      <HomePage />
    </div>
  );
};

export default App;
