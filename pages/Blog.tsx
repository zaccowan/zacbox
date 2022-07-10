import Link from "next/link";
import React from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
  const testPosts = [
    {
      postId: 1,
      postImgUrl:
        "https://images.unsplash.com/photo-1594323713852-9626155bfd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      postTitle: "Welcome On Board",
      postSummary:
        "In this post I introduce you to myself. That's really it. Sounds boring. But it actually is not. Okay maybe it is. Maybe it isn't. Why have you read this far? Go ahead and click the post. Do it. Do it. Comeee on. Im tired now. Read it if you want.",
      postParagraph:
        "If you're reading this thank you. I dont recieve any commission for your viewing, but something about the thought of someone reading my thoughts is cool. Also, creepy. Maybe dont read all my thoughts. (That was a note to my self, Im thinking out loud here so cut me some slack.) I don't'll get to the point though, sorry. ",
      postDate: "07/10/2022",
    },
  ];
  return (
    <div className="py-20 mx-4 lg:max-w-5xl lg:mx-auto">
      <h1 className="font-semibold text-4xl redToBlueTextGradient py-4">
        Welcome To My Blog
      </h1>
      <hr className="border-t-2 py-10" />
      <div className="space-y-20">
        {testPosts.map((post) => (
          <BlogCard
            key={post.postId}
            postImgUrl={post.postImgUrl}
            postTitle={post.postTitle}
            postSummary={post.postSummary}
            postParagraph={post.postParagraph}
            postDate={post.postDate}
          />
        ))}
      </div>

      {/* <div className="absolute bottom-0 top-0 left-0 right-0 py-80 text-6xl text-center bg-black/20 backdrop-blur-sm">
        <h1 className="text-white font-bold drop-shadow-2xl">
          Blog Under Construction <br />
          Come back later!
        </h1>
      </div> */}
    </div>
  );
}

export default Blog;
