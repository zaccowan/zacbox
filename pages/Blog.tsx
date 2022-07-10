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
      postParagraphs: [
        "If you're reading this thank you. I dont recieve any commission for your viewing, but something about the thought of someone reading my thoughts is cool. Also, creepy. Maybe dont read all my thoughts. (That was a note to my self, Im thinking out loud here so cut me some slack.) I'll get to the point though, sorry. ",
        "I want this blog to be a place where I can be transparent. All my important thoughts, whether of value or not will be found here one day. Even better than my thoughts (this is where you get your moneys worth), I plan on sharing the thoughts of others. Ive been on a big reading kick lately. College really pulled that out of me but Im glad it did. Theres a lot you can learn when you listen to what other people have to say. Who knew right? So, I will certainly not shy away from sharing those things here. But, lets be honest, this blog will probably have less traffic than a old west town where all the horses died, but thats okay, my analogy on the other hand (the horse thing I just said) was not. Why would I even let that be posted on the internet.",
        "If and when you do read a post on my blog. Understand where it comes from. This blog space, realistically, is more for me than you. I've started to learn the value of things like journaling, confession, achievement tracking, future visualization, and transparency. I need, and typing my thoughts provides, a means to line out all of my thoughts.",
        "Impulse thought incoming, but I also want to tell stories. I love a good story now days. Being a student athelete in college provides no stories for me to tell whatsoever, so dont expect tales of dining hall converstaions, late night grocery runs, skatepark adventures, or wrestling trips. Im bone dry when it comes to stories about those things.",
        "For now, Ill cut it short and sweet. It's late and I have a big day ahead of myself tomorrow. ",
        "",
        "-- God is at home with His people, and as our Father, He delights in His children. Remember how divine Wisdom said, My delights were with the sons of men (Proverbs 8:31). It is a wonderfull thing to be able to say, but God takes a great deal more pleasure in us than we do in Him; yet there seems to be nothing in us that can give Him pleasure, while in Him there is everything that can provide us with delight. --",
        "-Charles Spurgeon (Following Christ, chapter 10)-",
      ],
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
            postParagraphs={post.postParagraphs}
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
