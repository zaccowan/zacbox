import React from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
  const testPosts = [
    {
      postImgUrl: "/bg/AboutBG.jpg",
      postTitle: "Test Title",
      postParagraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum vel voluptatibus nobis dignissimos fugit numquam, error expedita omnis sit! Dolorem ullam, animi maxime tenetur laudantium dolorum ipsa deleniti at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus repudiandae obcaecati nemo dicta veniam asperiores sed autem quis vitae?",
      postDate: "07/08/2022",
    },
    {
      postImgUrl:
        "https://images.unsplash.com/photo-1657120109154-f582a33fc546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      postTitle: "Unspash Image Test",
      postParagraph:
        "This post is a test to assure sizing and responsiveness of these blog cards here are in tip top shape. For now, lets just appreciate the photograph by a lovely indivdual on unsplash. Heres the link: https://images.unsplash.com/photo-1657120109154-f582a33fc546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      postDate: "07/08/2022",
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
            postImgUrl={post.postImgUrl}
            postTitle={post.postTitle}
            postParagraph={post.postParagraph}
            postDate={post.postDate}
          />
        ))}
      </div>

      {/* <div className="absolute bottom-40 top-40 left-0 right-0 flex items-center justify-center text-6xl text-center bg-red-600/20">
        <h1 className="redToBlueTextGradient font-thin">
          Blog Under Construction <br />
          Come back later!
        </h1>
      </div> */}
    </div>
  );
}

export default Blog;
