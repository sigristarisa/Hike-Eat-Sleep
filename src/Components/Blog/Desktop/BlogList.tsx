import React from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import BlogPostItem from "./BlogPostItem";
import { BlogPost } from "../../../helpers/types";

interface props {
  isMobile: Function;
}

const BlogList: React.FC<props> = ({ isMobile }) => {
  const [blogposts] = useAllPrismicDocumentsByType<BlogPost>("blogpost");

  if (blogposts) {
    blogposts.sort((blogpostOne, blogpostTwo) => {
      const blogOneDate = blogpostOne.first_publication_date;
      const blogTwoDate = blogpostTwo.first_publication_date;

      if (blogOneDate === null) return 1;

      if (blogTwoDate === null) return 1;

      if (blogOneDate === blogTwoDate) return 0;

      return blogOneDate > blogTwoDate ? -1 : 1;
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
              isMobile={isMobile}
            />
          ))}
      </ul>
    </div>
  );
};

export default BlogList;
