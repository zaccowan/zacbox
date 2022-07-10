import Link from "next/link";
import React from "react";

function BlogCard({
  postImgUrl,
  postTitle,
  postSummary,
  postParagraphs,
  postDate,
}: BlogProps) {
  return (
    <Link
      href={{
        pathname: `/Blog/${postTitle}`,
        query: { postImgUrl, postTitle, postSummary, postParagraphs, postDate },
      }}
    >
      <div className="flex-col lg:flex-row flex space-y-8 lg:space-y-0 justify-between border shadow-lg rounded-2xl lg:hover:scale-110 transition-all duration-300 cursor-pointer group p-8">
        <img
          src={postImgUrl}
          className="lg:max-w-xl rounded-2xl object-cover my-auto border shadow-xl lg:group-hover:scale-95 lg:group-hover:shadow-black/20 transition-all duration-300 ease-out"
        />
        <div className="flex flex-col px-6 space-y-4 text-center lg:text-left">
          <h2 className="font-thin text-4xl tracking-widest redToBlueTextGradient lg:group-hover:translate-x-4 lg:group-hover:font-semibold transition-all duration-500 ease-out">
            {postTitle}
          </h2>
          <p className="text-lg leading-loose tracking-wide font-serif lg:indent-10 break-words">
            {postSummary}
          </p>
          <p className="italic tracking-widest text-">{postDate}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
