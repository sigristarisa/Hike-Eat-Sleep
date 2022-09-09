import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../helpers/types";

interface Props {
  blogpost: BlogPost;
  index: number;
  blogpostLength: number;
}

const BlogPostItem: React.FC<Props> = ({ blogpost, index, blogpostLength }) => {
  const addUnderline = (): string => {
    return index === blogpostLength - 1
      ? ""
      : "blog-post-item_container-underline";
  };
  return (
    <Link to={`/blog/${blogpost.uid}`} state={{ blogpost }}>
      <li
        className={`blog-post-item_container grid-columns_two-extend-auto align-items_center ${addUnderline()}`}
      >
        <p>{blogpost.data.post_title[0].text}</p>
        <p>...</p>
      </li>
    </Link>
  );
};

export default BlogPostItem;
