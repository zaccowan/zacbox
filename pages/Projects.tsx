import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <Link className="" href="/unreal">
        <motion.div
          className="cursor-pointer flex-full-center bg-blue-400 hover:bg-blue-500 transition duration-300 text-white group"
          transition={{ duration: 2, type: "spring" }}
        >
          <motion.div className="text-4xl font-bold py-40">
            <h1 className="text-center group-hover:scale-90 transition pb-20 xl:group-hover:animate-bounce">
              Unreal Engine Landing Page (Front End)
            </h1>
            <img
              className="rounded-2xl max-w-md md:max-w-3xl mx-auto lg:max-w-6xl group-hover:scale-110 transition"
              src="/unreal-landing-previw.gif"
              alt=""
            />
            <p className="text-center text-lg lg:text-xl pt-20 max-w-sm lg:max-w-4xl mx-auto">
              Impulsively did this little mini project one night after becoming
              fascinated with the unreal engine landing page.
              <br />
              <br />
              Notes: <br />
              -- Took zero time making the page responsive. <br /> -- Main Focus
              was the scroll effect exemplified on the landing page.
            </p>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Projects;
