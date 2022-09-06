import React from "react";
import "./BlogPostPage.css";

const BlogPostPage: React.FC = () => {
  return (
    <div className='blog-post-page_container place-items_center'>
      <div className='blog-post_container'>
        <header className='blog-post-header_container grid-columns_two-extend-one'>
          <p>Why I hike</p>
          <button>BACK TO BLOG</button>
        </header>
        <div className='blog-post-content_container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum
            aperiam in assumenda dolorum quod quidem, ad, quae eligendi magnam
            rem libero, atque veniam. Cumque neque quidem impedit veritatis
            magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
