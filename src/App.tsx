import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import BlogPage from "./Components/Blog/BlogPage";
import BlogPostPage from "./Components/Blog/BlogPostPage";
import ShopPage from "./Components/Shop/ShopPage";

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
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:uid' element={<BlogPostPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
};

export default App;
