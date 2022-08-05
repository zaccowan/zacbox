import type { NextPage } from "next";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Skills from "../components/major/Skills";
import Contact from "../components/major/Contact.js";

const Home: NextPage = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  // Scroll Linked Animate out for intro text
  const { scrollYProgress } = useViewportScroll();
  const introOut = useTransform(scrollYProgress, [0, 1], [0, 2500]);

  // Animation Data for intro text when comes into viewport
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
    <main>
      {/*
       *
       * Hero Section
       *
       * */}
      <motion.section
        className="h-screen flex-full-center"
        animate={"visible"}
        initial={"hidden"}
      >
        <motion.div
          className="w-[25rem] relative"
          style={{
            x: introFinished ? introOut : 0,
          }}
          variants={fadeInFromRight}
        >
          <Link href="/about">
            {/* Gradient Border Lazy Way w/o ::before or ::after */}
            <div className="intro-animation-outer-div" title="About Me">
              <div className="intro-animation-inner-div">
                <motion.h1
                  className="intro-animation-h1"
                  variants={scaleUpRedBlue}
                  whileHover={{ scale: [1, 1.2, 1] }}
                >
                  Howdy! I&#39;m Zac
                </motion.h1>
              </div>
            </div>
          </Link>

          <motion.p
            className="intro-animation-p"
            variants={scaleDownUpFade}
            onAnimationComplete={() => setIntroFinished(true)}
          >
            Welcome to my sandbox.
            <br />
            A small glimpse into my world.
            <br />
            Dont forget to look around!
          </motion.p>
        </motion.div>
      </motion.section>

      {/*
       *
       * Calls Section
       *
       * */}
      <section>
        <Link className="" href="/Projects">
          <div className="flex-full-center blue-hover-darken group py-40">
            <div>
              <h1 className="home-h1 xl:group-hover:animate-bounce">
                Projects
              </h1>
              <p className="home-p">
                Please do click this lovely blue button to see my projects.{" "}
                <br />
                <span className="text-sm italic">
                  p.s. I have a lot of ongoing projects to present soon but for
                  now enjoy some mini projects Ive done in the name of learning.
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="" href="/Blog">
          <div className="flex-full-center red-hover-darken group py-40">
            <div>
              <h1 className="home-h1 xl:group-hover:animate-bounce">My Blog</h1>
              <p className="home-p">
                I have a blog too. How cool right. <br /> Please read, I spent
                at least 3 minutes on it.
              </p>
            </div>
          </div>
        </Link>

        <Skills />

        <Contact />
      </section>
    </main>
  );
};

export default Home;
