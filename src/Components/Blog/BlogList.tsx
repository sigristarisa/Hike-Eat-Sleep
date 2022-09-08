import React from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import BlogPostItem from "./BlogPostItem";
import { BlogPost } from "../../helpers/types";

const BlogList: React.FC = () => {
  const [blogposts] = useAllPrismicDocumentsByType<BlogPost>("blogpost");

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
