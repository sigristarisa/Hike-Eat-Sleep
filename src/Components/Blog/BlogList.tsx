import React from "react";
import BlogPostItem from "./BlogPostItem";
import { BlogPost } from "../../helpers/types";

interface props {
  blogposts: BlogPost[];
}

const BlogList: React.FC<props> = ({ blogposts }) => {
  const renderBlogPost = (): void => {
    if (blogposts) console.log(blogposts[1].data);
  };

  renderBlogPost();

  return (
    <div>
      <ul className='blog-list'>
        {blogposts &&
          blogposts.map((blogpost, index) => (
            <BlogPostItem blogpost={blogpost} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default BlogList;
