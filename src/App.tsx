import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./index.css";

const App: React.FC = () => {
  const [navBtnId, setNavBtnId] = useState<number>(0);

  const activateNavBtn = (index: number): string => {
    return navBtnId === index ? "active" : "inactive";
  };

  return (
    <div className='App'>
      <Header setNavBtnId={setNavBtnId} activateNavBtn={activateNavBtn} />
      <h1>Hike Eat Sleep</h1>
    </div>
  );
};

export default App;
