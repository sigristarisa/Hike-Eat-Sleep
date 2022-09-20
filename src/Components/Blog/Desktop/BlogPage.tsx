import React from "react";
import BlogListHeader from "./BlogListHeader";
import BlogList from "./BlogList";
import Footer from "../../Footer/Desktop/Footer";
import { WindowSize } from "../../../helpers/types";
import hikeEatSleepLogo from "../../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepBlog from "../../../assets/HikeEatSleep_Blog.png";
import hikeEatSleepBlogMobile from "../../../assets/HikeEatSleep_BlogMobile.png";
import "./BlogPage.css";
import "../Mobile/BlogPageMobile.css";

interface props {
  windowSize: WindowSize;
}

const BlogPage: React.FC<props> = ({ windowSize }) => {
  const isMobile = (): string => {
    return windowSize.innerWidth > 600 ? "" : "-mobile";
  };

  return (
    <div className={`blog-page_container${isMobile()} place-items_center`}>
      <section className={`blog-list_container${isMobile()}`}>
        <BlogListHeader isMobile={isMobile} />
        <BlogList />
      </section>
      <div className={`blog-logo-img_wrapper${isMobile()}`}>
        <div className={`blog-logo_container${isMobile()}`}>
          <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
        </div>
        <div className={`blog-img_container${isMobile()} place-items_center`}>
          {windowSize.innerWidth > 600 ? (
            <img src={hikeEatSleepBlog} alt='hike eat sleep logo' />
          ) : (
            <img src={hikeEatSleepBlogMobile} alt='hike eat sleep logo' />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
