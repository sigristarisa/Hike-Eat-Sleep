import React from "react";
import { PostBody, PostText } from "../../helpers/types";

interface Props {
  content: PostBody;
}

const BlogPostContent: React.FC<Props> = ({ content }) => {
  console.log((content.primary as PostText).text[0].text);
  return (
    <li>
      <p>{(content.primary as PostText).text[0].text}</p>
    </li>
  );
};

export default BlogPostContent;
