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
