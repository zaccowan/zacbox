import { motion, useTransform, useViewportScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Unreal() {
  const [windowHeight, setWindowHeight] = useState<number>(500);
  const { scrollYProgress } = useViewportScroll();
  const scaleOut = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const yImg = useTransform(scrollYProgress, [0, 0.4, 1], [0, windowHeight, 0]);
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yAfterHero = useTransform(scrollYProgress, [0.5, 1], [1000, 0]);
  useEffect(() => {
    setWindowHeight(window.outerHeight / 2.5);
  }, [window]);
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <nav className="z-50 absolute top-0 left-0 right-0 flex items-center justify-between hover:bg-gray-900/50 transition backdrop-blur-sm hover:backdrop-blur-xl min-h-[5rem]">
        <div className="flex gap-x-8 items-center">
          <Link href="/">
            <img
              className="pl-8"
              src="/ue-horizontal-logo-cba14ebde1ea.svg"
              alt=""
            />
          </Link>
          <ul className="navUL">
            <li className="navLI">Products</li>
            <li className="navLI">Solutions</li>
            <li className="navLI">News & Events</li>
            <li className="navLI">Learn</li>
            <li className="navLI">Community</li>
            <li className="navLI">Support</li>
            <li className="navLI">Marketplace</li>
          </ul>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-br from-sky-600 to-sky-400 hover:to-sky-500 absolute right-0 top-0 bottom-0 px-8 cursor-pointer">
          <h1 className="uppercase text-md font-bold font-mono tracking-widest">
            Download
          </h1>
        </div>
      </nav>

      <section>
        <motion.div
          className="absolute h-[100%]"
          style={{ scale: scaleOut, y: yImg }}
        >
          <video className="" loop autoPlay width="100%" height="100%">
            <source src="https://cdn2.unrealengine.com/homepage-opener-5a55a50aaa4c.mp4" />
            Your browser does not support HTML5 video.
          </video>
        </motion.div>
        <motion.div
          className="h-screen bg-transparent bg-cover bg-center object-cover flex items-center"
          style={{ scale: scaleOut, y: yImg }}
        >
          <motion.div
            className="px-20 w-[80vw] md:w-[60vw] xl:w-[50vw] space-y-20 z-10"
            style={{ y: yHero, opacity: opacityHero }}
          >
            <h1 className="text-white text-5xl tracking-wider leading-snug font-normal">
              The world's most open and advanced real-time 3D creation tool
            </h1>
            <div className="px-4 py-2 border-2 border-sky-400 w-max cursor-pointer hover:shadow-btnShadow transition duration-300">
              <h2 className="uppercase text-white">Learn More about UE5</h2>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="space-y-20 max-w-8xl mx-auto"
        style={{ y: yAfterHero }}
      >
        <div className="h-[45rem] w-[90vw] hover:scale-110 transition-all duration-500 bg-[url('https://wallpaperaccess.com/full/2825704.gif')] bg-cover bg-center object-cover flex items-center"></div>
        <div className="pb-40 bg-white w-full flex-col">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 3, type: "spring" }}
          >
            <h1 className="text-6xl font-light pt-20 pb-12 text-center">
              Create without limits
            </h1>
            <p className=" leading-normal text-center whitespace-pre-line pb-20">
              With Unreal Engine, you can bring amazing real-time experiences to
              life using the world’s most advanced real-time 3D creation tool.{" "}
              <br />
              From first projects to the most demanding challenges, our free and
              accessible resources and inspirational community empower everyone
              to realize their ambitions.
            </p>
          </motion.div>

          {/* Options
          //
          //
         */}
          <div className="flex gap-x-4 max-w-6xl mx-auto pb-20">
            <motion.div
              className="border-t-2 border-sky-400 w-1/3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <h1 className="text-3xl pt-10 hover:text-sky-600">
                Learn Unreal Engine
              </h1>
              <p className="py-4 pb-8 h-32">
                With hundreds of hours of free online learning content, an
                extensive library of webinars, and options for instructor-led
                training, we have a way to learn that's right for you.
              </p>
              <div className="px-4 py-2 border-2 border-sky-400 w-max cursor-pointer hover:shadow-btnShadow transition duration-300">
                <h2 className="uppercase text-black">Start Learning</h2>
              </div>
            </motion.div>
            <motion.div
              className="border-t-2 border-sky-400 w-1/3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring", delay: 0.25 }}
            >
              <h1 className="text-3xl pt-10 hover:text-sky-600">
                Join the community
              </h1>
              <p className="py-4 pb-8 h-32">
                Unreal creators are the true power behind Unreal Engine. Be part
                of a community that builds cutting-edge experiences, and
                supports each other along the way.
              </p>
              <div className="px-4 py-2 border-2 border-sky-400 w-max cursor-pointer hover:shadow-btnShadow transition duration-300">
                <h2 className="uppercase text-black">Visit Community</h2>
              </div>
            </motion.div>
            <motion.div
              className="border-t-2 border-sky-400 w-1/3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring", delay: 0.5 }}
            >
              <h1 className="text-3xl pt-10 hover:text-sky-600">Get support</h1>
              <p className="py-4 pb-8 h-32">
                Explore comprehensive reference documentation, instructional
                guides, community-based support, and options for dedicated
                professional support.
              </p>
              <div className="px-4 py-2 border-2 border-sky-400 w-max cursor-pointer hover:shadow-btnShadow transition duration-300">
                <h2 className="uppercase text-black">See Support Options</h2>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="max-w-6xl mx-auto border-b-[1px] border-black"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 3, type: "spring" }}
          >
            <div className="flex items-center justify-between h-min py-8">
              <h1 className="text-4xl font-light">
                The latest from Unreal Engine
              </h1>
              <h2 className="uppercase border-b-2 border-sky-400 cursor-pointer">
                See all news & events
              </h2>
            </div>
          </motion.div>

          {/* The Latest
          //
          //
          */}
          <div className="flex gap-x-4 max-w-6xl mx-auto pb-20 pt-10">
            <motion.div
              className="w-1/3 space-y-6 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img
                className="hover:scale-110 transition-all duration-500 cursor-pointer"
                src="https://cdn2.unrealengine.com/m2m-02-1920x1080-313b6089e0e7.jpg?resize=1&w=533"
                alt=""
              />
              <h1 className="font-mono uppercase tracking-wide ">News</h1>
              <h1 className="text-xl w-3/4 hover:text-sky-400 cursor-pointer">
                New release brings Mesh to MetaHuman and more
              </h1>
              <p className="tracking-wide leading-relaxed">
                This release of the MetaHuman framework brings not only new
                features for MetaHuman Creator, but also an exciting new
                MetaHuman Plugin for Unreal Engine, as well as support for the
                new character rigging, animation, and physics features in Unreal
                Engine 5.
              </p>
              <h2 className="font-semibold text-sm tracking-widest w-max uppercase border-b-2 border-sky-400 cursor-pointer">
                Find Out More
              </h2>
            </motion.div>
            <motion.div
              className=" w-1/3 space-y-6 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring", delay: 0.25 }}
            >
              <img
                className="hover:scale-110 transition-all duration-500 cursor-pointer"
                src="https://cdn2.unrealengine.com/ue5-block-1961x1103-8db63d5857d7.jpg?resize=1&w=533"
                alt=""
              />
              <h1 className="font-mono uppercase tracking-wide ">News</h1>
              <h1 className="text-xl w-3/4 hover:text-sky-400 cursor-pointer">
                Unreal Engine 5 is now available!
              </h1>
              <p className="tracking-wide leading-relaxed">
                With this release, we aim to empower both large and small teams
                to really push the boundaries of what’s possible, visually and
                interactively. UE5 will enable game developers and creators
                across industries to realize next-generation real-time 3D
                content and experiences with greater freedom, fidelity, and
                flexibility than ever before.
              </p>
              <h2 className="font-semibold text-sm tracking-widest w-max uppercase border-b-2 border-sky-400 cursor-pointer">
                Find Out More
              </h2>
            </motion.div>
            <motion.div
              className=" w-1/3 space-y-6 overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, type: "spring", delay: 0.5 }}
            >
              <img
                className="hover:scale-110 transition-all duration-500 cursor-pointer"
                src="https://cdn2.unrealengine.com/feed-1920x1080-teaser-1920x1080-2cb99ff82b7b.jpg?resize=1&w=533"
                alt=""
              />
              <h1 className="font-mono uppercase tracking-wide ">News</h1>
              <h1 className="text-xl w-3/4 hover:text-sky-400 cursor-pointer">
                The Matrix Awakens: An Unreal Engine 5 Experience
              </h1>
              <p className="tracking-wide leading-relaxed">
                Ready to explore where interactive storytelling and
                entertainment goes next? Download the new UE5 tech demo today
                and take a wild ride into the reality-bending universe of The
                Matrix!
              </p>
              <h2 className="font-semibold text-sm tracking-widest w-max uppercase border-b-2 border-sky-400 cursor-pointer">
                Download NOw
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Unreal;
