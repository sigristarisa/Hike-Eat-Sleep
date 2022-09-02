import React from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Footer from "../Footer/Footer";
import hikeEatSleepLogo from "../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepBlog from "../../assets/HikeEatSleep_Blog.png";

type PostTitle = {
  span: [];
  text: string;
  type: string;
};

type BlogPostData = {
  post_title: [PostTitle];
};

type BlogPost = {
  alternate_languages: [];
  data: BlogPostData;
  first_publication_date: string;
  href: string;
  id: string;
  lang: string;
  last_publication_date: string;
  linked_documents: [];
  slugs: [string];
  tags: [];
  type: string;
  uid: string;
  url: string;
};

const BlogPage: React.FC = () => {
  const [blogposts] = useAllPrismicDocumentsByType<BlogPost>("blogpost");

  const checkBlogPosts = (): void => {
    if (blogposts) console.log(blogposts[0].data.post_title[0].text);
  };

  console.log(checkBlogPosts());
  return (
    <div>
      <div>
        <ul>
          {blogposts &&
            blogposts.map((blogpost, index) => (
              <li>{blogpost.data.post_title[0].text}</li>
            ))}
        </ul>
      </div>
      <div className='blog-logo_container'>
        <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
      </div>
      <div className='blog-img_container'>
        <img src={hikeEatSleepBlog} alt='hike eat sleep logo' />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
