import { motion } from "framer-motion";
import React from "react";
import Skill from "../minor/Skill";

function Skills() {
  const containerAnimate = {
    visible: {
      transition: { duration: 5, type: "spring", staggerChildren: 0.05 },
    },
  };

  return (
    <section className="skill-section-container">
      <h1 className="gradient-h1-title">Skills</h1>
      <div className="space-y-2">
        <p className="skill-key-text bg-green-500">Know Well</p>
        <p className="skill-key-text bg-yellow-400">Know Basics</p>
        <p className="skill-key-text bg-red-400 ">Curently Learning</p>
      </div>

      <motion.div
        className="skills-container"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={containerAnimate}
      >
        <Skill
          image="/skills/React-Icon.png"
          altText="React"
          hoverText="React JS"
          bgDark
          color="green"
        />
        <Skill
          image="/skills/next-js.svg"
          altText="Next JS"
          hoverText="Next JS"
          color="green"
        />
        <Skill
          image="/skills/firebase-logo.webp"
          altText="Firebase"
          hoverText="Firebase"
          color="yellow"
        />
        <Skill
          image="/skills/html-logo.webp"
          altText="HTML"
          hoverText="HTML"
          color="green"
        />
        <Skill
          image="/skills/css-logo.webp"
          altText="CSS"
          hoverText="CSS"
          color="green"
        />
        <Skill
          image="/skills/js-logo.png"
          altText="JavaScript"
          hoverText="JavaScript"
          color="green"
        />
        <Skill
          image="/skills/java-logo.png"
          altText="Java"
          hoverText="Java"
          color="green"
        />
        <Skill
          image="/skills/figma-logo.png"
          altText="Figma"
          hoverText="Figma"
          color="green"
        />
        <Skill
          image="/skills/Tailwind-Logo.png"
          altText="Tailwind"
          hoverText="Tailwind"
          color="green"
        />
        <Skill
          image="/skills/three-logo.png"
          altText="Three JS"
          hoverText="Three JS"
          color="yellow"
        />
        <Skill
          image="/skills/blender-logo.ico"
          altText="Blender"
          hoverText="Blender"
          color="green"
        />
        <Skill
          image="/skills/sanity-logo.png"
          altText="Sanity CMS"
          hoverText="Sanity CMS"
          color="green"
        />
      </motion.div>
    </section>
  );
}

export default Skills;
