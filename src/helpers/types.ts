export type Subscriber = {
  email: string;
  date: Date;
  city: string;
  country: string;
};

export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
};

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

type HyperLinkData = {
  link_type: string;
  url: string;
  target: string | null;
};

type SpansText = {
  start: number;
  end: number;
  type: string;
  data: HyperLinkData;
};

export type PostText = {
  type: string;
  text: any;
  spans: SpansText[] | [];
};

export type PostImage = {
  image: {
    alt: string | undefined;
    copyright: string | null;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  };
};

export type PostBody = {
  id: string;
  slice_type: string;
  slice_label: string | null;
  primary: PostText | PostImage;
};

export type BlogPostData = {
  post_title: PostTitle[];
  body: PostBody[];
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
  slugs: string[];
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
