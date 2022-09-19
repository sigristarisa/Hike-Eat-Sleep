import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Desktop/Header";
import HeaderMobile from "./Components/Header/Mobile/HeaderMobile";
import NavPage from "./Components/Header/Mobile/NavPage";
import HomePage from "./Components/Home/Desktop/HomePage";
import AboutPage from "./Components/About/AboutPage";
import BlogPage from "./Components/Blog/BlogPage";
import BlogPostPage from "./Components/Blog/BlogPostPage";
import SubscribePage from "./Components/Subscribe/SubscribePage";
import ShopPage from "./Components/Shop/ShopPage";
import Preview from "./Components/Preview/Preview";
import { WindowSize } from "./helpers/types";
import "./Styles/index.css";
import "./Styles/layout.css";

const App: React.FC = () => {
  const getWindowSize = (): WindowSize => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [navBtnId, setNavBtnId] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize());

  const activateNavBtn = (index: number): string => {
    return navBtnId === index ? "active" : "inactive";
  };

  useEffect(() => {
    const handleWindowResize = (): void => setWindowSize(getWindowSize());
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className='App'>
      {windowSize.innerWidth > 420 ? (
        <Header setNavBtnId={setNavBtnId} activateNavBtn={activateNavBtn} />
      ) : (
        <HeaderMobile />
      )}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/navi' element={<NavPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:uid' element={<BlogPostPage />} />
        <Route path='/subscribe' element={<SubscribePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
