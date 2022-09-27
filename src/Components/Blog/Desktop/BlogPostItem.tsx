import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../../helpers/types";

interface Props {
  blogpost: BlogPost;
  index: number;
  blogpostLength: number;
  isMobile: Function;
}

const BlogPostItem: React.FC<Props> = ({
  blogpost,
  index,
  blogpostLength,
  isMobile,
}) => {
  const addUnderline = (): string => {
    return index === blogpostLength - 1 ? "" : "-underline";
  };
  return (
    <Link to={`/blog/${blogpost.uid}`} state={{ blogpost }}>
      <li
        className={`blog-post-item_container${addUnderline()}${isMobile()} grid-columns_two-extend-auto align-items_center`}
      >
        <p>{blogpost.data.post_title[0].text}</p>
        <p>...</p>
      </li>
    </Link>
  );
};

export default BlogPostItem;
