import React from "react";
import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { postImgUrl, postTitle, postDate } = router.query;
  const postParagraphs = router.query.postParagraphs as string[];
  return (
    <div className="pt-40 ">
      <div className="flex flex-col items-center  space-y-8">
        <div className="flex justify-center items-end space-x-8 w-[100%] px-20">
          <h1 className="text-6xl font-thin uppercase redToBlueTextGradient">
            {postTitle}
          </h1>
          <p className="text-sm italic">{postDate}</p>
        </div>
        <img
          src={postImgUrl as string}
          className="rounded-3xl shadow-xl shadow-black/20 border"
        />
      </div>
      <div className="bg-zinc-800 mt-20 py-20 ">
        {postParagraphs?.map((paragraph: string) => (
          <p
            key={paragraph.substring(0, 22)}
            className="lg:max-w-5xl lg:mx-auto mx-4 text-center text-white text-2xl py-4"
          >
            {" "}
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
