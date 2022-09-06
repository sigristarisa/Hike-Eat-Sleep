export type NavButton = {
  id: number;
  name: string;
  navigate: string;
};

type PostTitle = {
  span: [];
  text: string;
  type: string;
};

type BlogPostData = {
  post_title: [PostTitle];
};

export interface BlogPost {
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
}
