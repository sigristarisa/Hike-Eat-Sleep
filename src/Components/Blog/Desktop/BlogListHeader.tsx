import React from "react";
import { useNavigate } from "react-router-dom";

const BlogListHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-list-header_container grid-columns_two-extend-auto align-items_center'>
      <p>outdoor blog by wanderfux</p>
      <button onClick={() => navigate("../subscribe")}>SUBSCRIBE</button>
    </div>
  );
};

export default BlogListHeader;
