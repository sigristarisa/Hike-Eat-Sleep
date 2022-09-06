import React from "react";
import BlogListHeader from "./BlogListHeader";
import BlogList from "./BlogList";
import Footer from "../Footer/Footer";
import hikeEatSleepLogo from "../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepBlog from "../../assets/HikeEatSleep_Blog.png";
import { BlogPost } from "../../helpers/types";

import "./BlogPage.css";

interface props {
  blogposts: BlogPost[];
}

const BlogPage: React.FC<props> = ({ blogposts }) => {
  return (
    <div className='blog-page_container place-items_center'>
      <section className='blog-list_container'>
        <BlogListHeader />
        <BlogList blogposts={blogposts} />
      </section>
      <div className='blog-logo_container'>
        <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
      </div>
      <div className='blog-img_container'>
        <img src={hikeEatSleepBlog} alt='hike eat sleep logo' />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
