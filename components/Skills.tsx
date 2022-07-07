import { motion } from "framer-motion";
import React from "react";

function Skills() {
  return (
    <section className="space-y-6 max-w-6xl mx-auto p-6 my-36">
      <h1 className="font-bold text-6xl text-center redToBlueTextGradient">
        Skills
        <br />
      </h1>
      <div className="space-y-2">
        <div className="h-10 rounded-full bg-green-500 mx-auto flex items-center justify-center uppercase text-white font-semibold">
          Know Well
        </div>
        <div className="h-10 rounded-full bg-yellow-400 mx-auto flex items-center justify-center uppercase text-white font-semibold">
          Know Basics
        </div>
        <div className="h-10 rounded-full bg-red-400 mx-auto flex items-center justify-center uppercase text-white font-semibold">
          Curently Learning
        </div>
      </div>
      {/* React */}
      <div className="flex gap-x-4 gap-y-4 flex-wrap justify-center items-center ">
        <motion.div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-zinc-900 object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-green-500 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/React-Icon.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">React JS</div>
          </div>
        </motion.div>
        {/* Next JS */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-green-500 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/next-js.svg"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Next JS</div>
          </div>
        </div>
        {/* Firebase */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-yellow-400 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/firebase-logo.webp"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Firebase</div>
          </div>
        </div>
        {/* HTML */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 border-green-500 border-8 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/html-logo.webp"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">HTML</div>
          </div>
        </div>
        {/* CSS */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 border-green-500 border-8 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/css-logo.webp"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">CSS</div>
          </div>
        </div>
        {/* JavaScript */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 border-green-500 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/js-logo.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">JavaScript</div>
          </div>
        </div>
        {/* Java */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-green-500 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/java-logo.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Java</div>
          </div>
        </div>
        {/* Figma */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-yellow-400 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/figma-logo.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Figma</div>
          </div>
        </div>
        {/* Tailwind */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-green-500 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/Tailwind-Logo.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Tailwind</div>
          </div>
        </div>
        {/* Three JS */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white bg-center object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-yellow-400 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/three-logo.png"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Three Js</div>
          </div>
        </div>
        {/* Blender */}
        <div className="relative w-auto group">
          <img
            className="w-40 h-40 bg-white bg-center object-cover rounded-full shadow-xl group-hover:scale-[1.2] transition-all border-green-500 border-8 group-hover:backdrop-blur-3xl group-hover:brightness-50"
            src="/skills/blender-logo.ico"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center overflow-clip">
            <div className="text-white text-center font-bold">Blender</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
