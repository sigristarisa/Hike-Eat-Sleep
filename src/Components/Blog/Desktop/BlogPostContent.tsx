import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { PostBody, PostText } from "../../../helpers/types";
import BlogPostImage from "./BlogPostImage";

interface Props {
  content: PostBody;
}

const BlogPostContent: React.FC<Props> = ({ content }) => {
  return (
    <li>
      {(() => {
        switch (content.slice_type) {
          case "text":
            return (
              <PrismicRichText field={(content.primary as PostText).text} />
            );
          case "image":
            return <BlogPostImage content={content} />;
          default:
            return <p>Oops! empty space...</p>;
        }
      })()}
    </li>
  );
};

export default BlogPostContent;
