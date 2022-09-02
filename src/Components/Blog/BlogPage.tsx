import React from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Footer from "../Footer/Footer";
import { BlogPost } from "../../helpers/types";
import hikeEatSleepLogo from "../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepBlog from "../../assets/HikeEatSleep_Blog.png";
import "./BlogPage.css";

const BlogPage: React.FC = () => {
  const [blogposts] = useAllPrismicDocumentsByType<BlogPost>("blogpost");

  return (
    <div className='place-items_center'>
      <section className='blog-list_container'>
        <div className='blog-list-header_container grid-columns_two-extend-one'>
          <p>outdoor blog by wanderfux</p>
          <button>SUBSCRIBE</button>
        </div>
        <div>
          <ul className='blog-list'>
            {blogposts &&
              blogposts.map((blogpost, index) => (
                <li key={index} className='grid-columns_two-extend-one'>
                  <p>{blogpost.data.post_title[0].text}</p>
                  <p>...</p>
                </li>
              ))}
          </ul>
        </div>
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
