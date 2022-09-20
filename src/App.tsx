import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Desktop/Header";
import HeaderMobile from "./Components/Header/Mobile/HeaderMobile";
import NavPage from "./Components/Header/Mobile/NavPage";
import HomePage from "./Components/Home/Desktop/HomePage";
import HomePageMobile from "./Components/Home/Mobile/HomePageMobile";
import AboutPage from "./Components/About/Desktop/AboutPage";
import AboutPageMobile from "./Components/About/Mobile/AboutPageMobile";
import BlogPage from "./Components/Blog/Desktop/BlogPage";
import BlogPostPage from "./Components/Blog/Desktop/BlogPostPage";
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
  const [isNavPage, setIsNavPage] = useState<boolean>(false);

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
      {windowSize.innerWidth > 600 ? (
        <Header setNavBtnId={setNavBtnId} activateNavBtn={activateNavBtn} />
      ) : (
        <HeaderMobile isNavPage={isNavPage} setIsNavPage={setIsNavPage} />
      )}

      {isNavPage && <NavPage setIsNavPage={setIsNavPage} />}

      <Routes>
        <Route
          path='/'
          element={
            windowSize.innerWidth > 600 ? <HomePage /> : <HomePageMobile />
          }
        />
        <Route
          path='/about'
          element={
            windowSize.innerWidth > 600 ? <AboutPage /> : <AboutPageMobile />
          }
        />
        <Route path='/blog' element={<BlogPage windowSize={windowSize} />} />
        <Route path='/blog/:uid' element={<BlogPostPage />} />
        <Route path='/subscribe' element={<SubscribePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
