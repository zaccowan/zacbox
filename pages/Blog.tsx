import React from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
  const testPosts = [
    {
      postId: 1,
      postImgUrl:
        "https://images.unsplash.com/photo-1657114650481-35584a571239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      postTitle: "Test Title",
      postParagraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum vel voluptatibus nobis dignissimos fugit numquam, error expedita omnis sit! Dolorem ullam, animi maxime tenetur laudantium dolorum ipsa deleniti at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus repudiandae obcaecati nemo dicta veniam asperiores sed autem quis vitae?",
      postDate: "07/08/2022",
    },
    {
      postId: 2,
      postImgUrl:
        "https://images.unsplash.com/photo-1657120109154-f582a33fc546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      postTitle: "Unspash Image Test",
      postParagraph:
        "This post is a test to assure sizing and responsiveness of these blog cards here are in tip top shape. For now, lets just appreciate the photograph by a lovely indivdual on unsplash.",
      postDate: "07/08/2022",
    },
    {
      postId: 3,
      postImgUrl:
        "https://images.unsplash.com/photo-1656989048329-4226c441e501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
      postTitle: "Filler Content Test",
      postParagraph:
        "Heres a bit of a shorter summary for fit testing. I dont know where this photo was taken but its pretty cool to look at!",
      postDate: "07/08/2022",
    },
    {
      postId: 4,
      postImgUrl:
        "https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      postTitle: "Okay Im done.",
      postParagraph:
        "Cool picture of a bible at sunset. Maybe sunrise. Who knows? But does it really matter? Nope. Okay Im really done now. Bye.",
      postDate: "07/08/2022",
    },
  ];
  return (
    <div className="py-20 mx-4 lg:max-w-5xl lg:mx-auto">
      <h1 className="font-semibold text-4xl redToBlueTextGradient py-4">
        Welcome To My Blog <br />
        (This Area is Under Construction and Is Not Yet Active)
      </h1>
      <hr className="border-t-2 py-10" />
      <div className="space-y-20">
        {testPosts.map((post) => (
          <BlogCard
            key={post.postId}
            postImgUrl={post.postImgUrl}
            postTitle={post.postTitle}
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
