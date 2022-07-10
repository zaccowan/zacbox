import type { NextPage } from "next";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skills from "../components/Skills";
import Contact from "../components/Contact.js";
import TextTransition, { presets } from "react-text-transition";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const xInBlue = useTransform(scrollYProgress, [0, 0.2], [-1200, 0]);
  const xInRed = useTransform(scrollYProgress, [0.1, 0.5], [-1200, 0]);

  const fadeInFromRight = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, type: "spring" },
    },
    hidden: { opacity: 0, x: -2000 },
  };
  const scaleUpRedBlue = {
    visible: {
      scale: [1, 1.2, 1],
      transition: { duration: 1, type: "spring", delay: 1 },
      color: [
        "rgb(0,0,0)",
        "rgb(248 113 113)",
        "rgb(96 165 250)",
        "rgba(96 165 250 0)",
      ],
    },
    hidden: { scale: 0 },
  };
  const scaleDownUpFade = {
    visible: {
      opacity: [0, 0, 1],
      scale: [1, 0.9, 1],
      transition: { duration: 2, type: "spring", delay: 1 },
    },
    hidden: { scale: 0 },
  };

  return (
    <div className="">
      <motion.div
        className="h-screen flex justify-center items-center"
        animate={"visible"}
        initial={"hidden"}
      >
        <motion.div
          className="w-[25rem] relative"
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, 2500]) }}
          variants={fadeInFromRight}
        >
          <Link href="/about">
            <motion.div
              className="relative rounded-lg hover:p-2 transition-all duration-500 w-[100%] h-20  bg-gradient-to-r from-blue-600/0 to-red-400/0
            hover:from-blue-600 hover:to-red-400 cursor-pointer box-border"
              title="About Me"
            >
              <div className="text-5xl font-thin flex justify-center items-center rounded-md bg-white h-[100%] w-[100%] py-2">
                <motion.h1
                  className="redToBlueTextGradient py-2"
                  variants={scaleUpRedBlue}
                  whileHover={{ scale: [1, 1.2, 1] }}
                >
                  Howdy! I&#39;m Zac
                </motion.h1>
              </div>
            </motion.div>
          </Link>

          <motion.p
            className="text-xl font-semibold text-center rounded-md p-4"
            variants={scaleDownUpFade}
            onAnimationComplete={() => setIntroFinished(true)}
          >
            Welcome to my sandbox. <br /> Here you can find various pieces of my
            web development test projects and a little bit about me!
          </motion.p>
        </motion.div>
      </motion.div>

      {introFinished && (
        <>
          <motion.div>
            <Link className="" href="/Projects">
              <motion.div
                className="cursor-pointer flex justify-center items-center bg-blue-400 hover:bg-blue-500 transition duration-300 text-white group"
                transition={{ duration: 2, type: "spring" }}
              >
                <motion.div className="text-5xl font-bold py-40">
                  <h1 className="text-center group-hover:scale-90 transition xl:group-hover:animate-bounce">
                    Projects
                  </h1>
                  <p className="text-center text-lg lg:text-xl py-20 max-w-sm lg:max-w-4xl mx-auto">
                    Please do click this lovely blue button to see my projects.{" "}
                    <br />
                    <span className="text-sm italic">
                      p.s. I have a lot of ongoing projects to present soon but
                      for now enjoy some mini projects Ive done in the name of
                      learning.
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </Link>
            <Link className="" href="/Blog">
              <motion.div
                className="cursor-pointer flex justify-center items-center bg-red-400 hover:bg-red-500 transition duration-300 text-white group"
                transition={{ duration: 2, type: "spring" }}
              >
                <motion.div className="text-5xl font-bold py-40">
                  <h1 className="text-center group-hover:scale-90 transition xl:group-hover:animate-bounce">
                    My Blog
                  </h1>
                  <p className="text-center text-lg lg:text-xl py-20 max-w-sm lg:max-w-4xl mx-auto">
                    I have a blog too. How cool right. <br /> Please read, I
                    spent at least 3 minutes on it.
                  </p>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          <Skills />

          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
