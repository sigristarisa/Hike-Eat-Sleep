import React from "react";
import { usePrismicDocumentByUID } from "@prismicio/react";

import { useLocation, useNavigate } from "react-router-dom";
import BlogPostContent from "./BlogPostContent";
import Footer from "../../Footer/Desktop/Footer";
import FooterMobile from "../../Footer/Mobile/FooterMobile";
import { BlogPost, WindowSize } from "../../../helpers/types";
import "./BlogPostPage.css";
import "../Mobile/BlogPostPageMobile.css";

interface props {
  windowSize: WindowSize;
  isMobile: Function;
}

const BlogPostPage: React.FC<props> = ({ windowSize, isMobile }) => {
  const location = useLocation();

  const blogpostUid = location.pathname.split("/")[2];

  const navigate = useNavigate();
  const [blogpost] = usePrismicDocumentByUID<BlogPost>(
    "blogpost",
    `${blogpostUid}`
  );

  return (
    <div className={`blog-post-page_container${isMobile()} place-items_center`}>
      {blogpost && (
        <div className={`blog-post_container${isMobile()} `}>
          <header
            className={`blog-post-header_container${isMobile()} justify-items_start `}
          >
            <button
              className='justify-self_end'
              onClick={() => navigate("../blog")}
            >
              close article
            </button>
            <div className='blog-post-title_container align-items_end'>
              <p>{blogpost.data.post_title[0].text}</p>
            </div>
          </header>
          <div className='blog-post-content_container'>
            <ul>
              {blogpost.data.body.map((content, index) => (
                <BlogPostContent key={index} content={content} />
              ))}
            </ul>
          </div>
        </div>
      )}
      {windowSize.innerWidth > 600 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default BlogPostPage;
