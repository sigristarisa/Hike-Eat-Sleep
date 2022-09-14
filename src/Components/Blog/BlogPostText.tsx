import React from "react";
import { PostBody } from "../../helpers/types";

interface Props {
  content: PostBody;
}

const BlogPostText: React.FC<Props> = ({ content }) => {
  console.log(content);
  return <p>hi</p>;
};

export default BlogPostText;
