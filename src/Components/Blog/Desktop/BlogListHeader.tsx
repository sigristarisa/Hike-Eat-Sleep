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
      <p>outdoor blog{isMobile() && <br></br>} by wanderfux</p>
      <button onClick={() => navigate("../subscribe")}>SUBSCRIBE</button>
    </div>
  );
};

export default BlogListHeader;
