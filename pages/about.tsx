import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function about() {
  return (
    <main>
      <section className="mb-40 ">
        {/* 
    //----------------------------------------------------------------
    // About Me Image Section
    //----------------------------------------------------------------

  */}
        <div className="relative w-full h-[90vh] bg-black text-white bg-[url('/bg/AboutMeBG.jpg')] bg-auto bg-center bg-fixed flex justify-center items-center">
          <h1 className="font-bold text-6xl drop-shadow-lg z-50 -mt-20">
            About Me
          </h1>
          <div className=" absolute -bottom-32 bg-gradient-to- border-t-2  from-white/50 to-white/5 backdrop-blur-sm w-[40rem] h-[25rem] flex items-center justify-center rounded-t-full">
            <img
              src="/about/portfolio-mask.png"
              className="h-96 drop-shadow-2xl object-contain brightness-90 absolute bottom-20 opacity-95"
            />
          </div>
        </div>

        <div className="mt-20 sm:mx-auto space-y-14">
          {/*  
    //----------------------------------------------------------------
    // Studies Section 
    //----------------------------------------------------------------
    */}
          <div className="space-y-2 max-w-6xl mx-auto p-6">
            <h1 className="font-bold text-6xl text-center redToBlueTextGradient p-8">
              Studies
            </h1>
            <p className="text-xl text-center pb-10">
              I am student at Bellarmine University going into the second year
              of my undergraduate program. My primary focus is to earn a{" "}
              <span className="redToBlueTextGradient font-bold">
                {" "}
                Bachelor of Science in Computer Engineering
              </span>
              , though I am also{" "}
              <span className="redToBlueTextGradient font-semibold">
                {" "}
                majoring in mathematics
              </span>
              .
              <br />
              <br />
              Computer Engineering Major? Why such the focus on software,
              shouldnt you be cleaning a cpu cooler or something?
              <br />
              <br />
              During my first year of study I came to love the process of
              software development. Whether its the begining stages of problem
              assessment or the nitpicky implementation of a long pondered
              solution, <br />
              <br />
              <span className="redToBlueTextGradient font-bold">
                I have a passion for solving problems, thinking creatively,
                learning constantly, and writing well organized, efficient code.
              </span>{" "}
            </p>

            <Skills />
          </div>

          {/*  
    //----------------------------------------------------------------
    // Faith Section 
    //----------------------------------------------------------------
    */}
          <section className="bg-zinc-100 relative">
            <div className="space-y-2 max-w-6xl mx-auto p-6 py-20 ">
              <h1 className="font-bold text-6xl text-center redToBlueTextGradient p-8">
                Faith
              </h1>
              <p className="text-xl text-center">
                You certainly cant know the true me unless I tell you about my
                life as a Christian. Its a huge part of who I am. The way I wake
                up, eat cereal, speak, tend to relationships, deal with
                hardships, so on and so on, I try to do with an awareness and
                gratitude to my God.
                <br />
                <br />I live life imperfectly (very imperfectly believe it or
                not), but at the core I know every breath is another blessed
                opportunity to love the Lord my God and to love my neighbor.
                <br />
                <br />
                <span className="flex justify-center items-center rounded-md bg-white p-4">
                  <span className="spanQuote py-2">
                    "Whatever you do, work heartily, as for the Lord and not for
                    men" - Colossians 3:23{" "}
                  </span>
                </span>
              </p>
            </div>
            <img
              src="/about/cross.png"
              className="opacity-5 bg-blend-screen -z-0 absolute bottom-0 right-0"
            />
          </section>

          {/*  
    //----------------------------------------------------------------
    // Wrestling Section 
    //----------------------------------------------------------------
    */}
          <section className="relative">
            <div className="space-y-2 max-w-6xl mx-auto p-6">
              <h1 className="font-bold text-6xl text-center redToBlueTextGradient p-8">
                Wrestling
              </h1>
              <p className="text-xl text-center">
                I've been wrestling since second grade. Cool right? (Im guessing
                you dont actually care, its okay).
                <br />
                <br />I believe my life as a wrestler is ignificant to many
                aspects of my person:
                <br />
                <span className="redToBlueTextGradient font-bold">
                  intense work ethic, positive mentality, socially engaged, good
                  problem solving,
                </span>
                <br />
                ability to count past 7, yada yada yada.
                <br />
                <br />
                The truth is I care span a lot. Much more then my poor sarcasim
                may make you think. I want (and sort of need) to work for
                others. You wouldnt think that would come from an individualized
                sport like wrestling but, Im would like to testify to that fact.
                <br />
                <br />
                <span className="flex justify-center items-center rounded-md bg-zinc-100 p-4">
                  <span className="spanQuote py-2">I am on YOUR TEAM.</span>
                </span>
              </p>
            </div>
          </section>

          {/* End About Me */}
        </div>
      </section>

      <section className="">
        {/* 
    //----------------------------------------------------------------
    // About Zacbox Image Section
    //----------------------------------------------------------------

  */}
        <div className="w-full h-[90vh] bg-black text-white bg-[url('/bg/AboutSiteBG.jpg')] bg-auto bg-center bg-fixed flex justify-center items-center">
          <h1 className="font-bold text-6xl drop-shadow-lg">About Zacbox</h1>
        </div>

        <div className="mt-20 sm:mx-auto space-y-14">
          {/*  
    //----------------------------------------------------------------
    // Origin Section 
    //----------------------------------------------------------------
    */}
          <div className="space-y-2 max-w-6xl mx-auto p-6">
            <h1 className="font-bold text-6xl text-center redToBlueTextGradient p-8">
              Origin
            </h1>
            <p className="text-xl text-center">
              This site exists mainly to cure my itch to try things out.
              <br />
              <span className="redToBlueTextGradient font-bold">
                Its a place I can experiment with new ideas and replicate things
                I see.
                <br />
                You may even find that I can be of great value to you.
              </span>
            </p>
          </div>
          {/*  
          //----------------------------------------------------------------
          // What to Expect Section 
          //----------------------------------------------------------------
          */}
          <div className="bg-zinc-100 py-20">
            <div className="space-y-2 max-w-6xl mx-auto p-6">
              <h1 className="font-bold text-6xl text-center redToBlueTextGradient p-8">
                What to Expect
              </h1>
              <p className="text-xl text-center">
                When looking around youre going to find a lot of projects of
                varrying completion. Some front-end only, some backend
                extravaganzas (because backend is so flashy and visually
                appealing), some project far from completion, and some
                fully-refined gems.
                <br />
                <br />
                The point is expect to find a lot of a lot.
                <br />
                <span className="redToBlueTextGradient font-bold">
                  I love experimentation and deviating from whats typical but I
                  also believe strongly in methodology.
                </span>
                <br />
                <br />
                Thats why this place is my sandbox and not my hotel.
                <br />
                <span className="redToBlueTextGradient font-bold">
                  Im here to build a lot of castles and learn what works and
                  what doesnt. <br /> What is visually appealing and what would
                  have looked better if I left it as a pile of wet sand.
                </span>
                <br />
                At the end of the day these many of the projects on Zacbox are
                meant to be admired for a short time and forgotten with the high
                tide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default about;
