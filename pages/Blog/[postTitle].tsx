import React from "react";
import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { postImgUrl, postTitle, postParagraph, postDate } = router.query;
  return (
    <div className="py-40 flex flex-col items-center max-w-4xl mx-auto space-y-8">
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
      <p className="text-center lg:text-left lg:indent-10">{postParagraph}</p>
    </div>
  );
}

export default PostPage;
