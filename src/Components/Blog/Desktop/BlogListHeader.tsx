import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
  isMobile: Function;
}

const BlogListHeader: React.FC<props> = ({ isMobile }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`blog-list-header_container${isMobile()} grid-columns_two-extend-auto align-items_center`}
    >
      <p>fux blog</p>
      <button onClick={() => navigate("../subscribe")}>subscribe</button>
    </div>
  );
};

export default BlogListHeader;
