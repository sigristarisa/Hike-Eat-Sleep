import React from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import BlogPostItem from "./BlogPostItem";
import { BlogPost } from "../../../helpers/types";

const BlogList: React.FC = () => {
  const [blogposts] = useAllPrismicDocumentsByType<BlogPost>("blogpost");

  if (blogposts) {
    blogposts.sort((blogpostOne, blogpostTwo) => {
      const dateOne: string = blogpostOne.first_publication_date
        .split("T")[0]
        .split("-")
        .join("");
      const dateTwo: string = blogpostTwo.first_publication_date
        .split("T")[0]
        .split("-")
        .join("");
      return dateTwo.localeCompare(dateOne);
    });
  }

  return (
    <div>
      <ul className='blog-list'>
        {blogposts &&
          blogposts.map((blogpost, index) => (
            <BlogPostItem
              blogpost={blogpost}
              key={index}
              index={index}
              blogpostLength={blogposts.length}
            />
          ))}
      </ul>
    </div>
  );
};

export default BlogList;
