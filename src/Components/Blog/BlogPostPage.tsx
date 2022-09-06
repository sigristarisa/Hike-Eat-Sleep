import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlogPost } from "../../helpers/types";

import "./BlogPostPage.css";

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: {
    blogpost: BlogPost;
  };

  key: string;
}

const BlogPostPage: React.FC = () => {
  const [blogpost, setBlogPost] = useState<BlogPost>();
  const location = useLocation();
  console.log("blogpost: ", blogpost);

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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              cum aperiam in assumenda dolorum quod quidem, ad, quae eligendi
              magnam rem libero, atque veniam. Cumque neque quidem impedit
              veritatis magnam!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
