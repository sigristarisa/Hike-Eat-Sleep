import React from "react";
import { PostBody, PostText, PostImage } from "../../helpers/types";
import BlogPostImage from "./BlogPostImage";

interface Props {
  content: PostBody;
}

const BlogPostContent: React.FC<Props> = ({ content }) => {
  console.log("what's in here:", (content.primary as PostText).text);

  return (
    <li>
      {(() => {
        switch (content.slice_type) {
          case "text":
            return <p>{(content.primary as PostText).text[0].text}</p>;
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
