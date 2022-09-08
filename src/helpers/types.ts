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

type PostTextArr = {
  type: string;
  text: string;
};
export type PostText = {
  type: string;
  text: [PostTextArr];
  spans: [];
};

export type PostImage = {
  image: {
    alt: string | null;
    copyright: string | null;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
    type: string;
    text: string;
    spans: [];
  };
};

export type PostBody = {
  id: string;
  slice_type: string;
  slice_label: string | null;
  primary: PostText | PostImage;
};

export type BlogPostData = {
  post_title: [PostTitle];
  body: [PostBody];
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

export interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: {
    blogpost: BlogPost;
  };

  key: string;
}
