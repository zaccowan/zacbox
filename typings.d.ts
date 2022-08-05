type BlogProps = {
  postImgUrl: string;
  postTitle: string;
  postSummary: string;
  postParagraphs?: string[];
  postDate: string;
};

type BlogPost = {
  postTitle: string;
  postSummary: string;
  postParagraphs: string[];
  postImage: string;
  postDate: timestamp;
  id: string;
};

type Skill = {
  image: string;
  altText: string;
  hoverText: string;
  bgDark?: boolean;
  color: string;
};
