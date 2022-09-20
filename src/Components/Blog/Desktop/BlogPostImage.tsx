import React from "react";
import { PostBody, PostImage } from "../../../helpers/types";

interface Props {
  content: PostBody;
}

const BlogPostImage: React.FC<Props> = ({ content }) => {
  return (
    <div className='blog-post-image_container'>
      <img
        src={(content.primary as PostImage).image.url}
        alt={(content.primary as PostImage).image.alt}
      />
    </div>
  );
};

export default BlogPostImage;
