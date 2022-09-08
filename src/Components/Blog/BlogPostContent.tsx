import React from "react";
import { PostBody, PostText, PostImage } from "../../helpers/types";

interface Props {
  content: PostBody;
}

const BlogPostContent: React.FC<Props> = ({ content }) => {
  return (
    <li>
      {(() => {
        switch (content.slice_type) {
          case "text":
            return <p>{(content.primary as PostText).text[0].text}</p>;
          case "image":
            return (
              <div className='blog-post-image_container'>
                <img
                  src={(content.primary as PostImage).image.url}
                  alt={(content.primary as PostImage).image.alt}
                />
              </div>
            );
          default:
            return <p>Oops! empty space...</p>;
        }
      })()}
    </li>
  );
};

export default BlogPostContent;
