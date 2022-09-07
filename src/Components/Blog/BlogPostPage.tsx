import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogPostText from "./BlogPostText";
import { BlogPost, Location } from "../../helpers/types";
import "./BlogPostPage.css";

const BlogPostPage: React.FC = () => {
  const [blogpost, setBlogPost] = useState<BlogPost>();
  const location = useLocation();

  useEffect(() => {
    const clickedBlogPost: BlogPost = (location as Location).state.blogpost;
    setBlogPost(clickedBlogPost);
  }, []);

  return (
    <div className='blog-post-page_container place-items_center'>
      {blogpost && (
        <div className='blog-post_container'>
          <header className='blog-post-header_container grid-columns_two-extend-one'>
            <p>{blogpost.data.post_title[0].text}</p>
            <button>BACK TO BLOG</button>
          </header>
          <div className='blog-post-content_container'>
            <ul>
              {blogpost.data.body.map((content, index) => (
                <BlogPostText content={content} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
