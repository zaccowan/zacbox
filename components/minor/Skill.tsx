import { motion } from "framer-motion";
import Image from "next/image";

function Skill({ image, altText, hoverText, bgDark, color }: Skill) {
  const skillAnimate = {
    visible: {
      scale: [0, 1],
      opacity: [0, 0, 1],
      transition: { duration: 0.5, type: "spring" },
    },
    hidden: { scale: 0, opacity: 0 },
  };
  return (
    <motion.div
      className="relative group"
      variants={skillAnimate}
      viewport={{ once: true, amount: 1 }}
    >
      <div
        className={`
            image-skill-container 
            ${bgDark ? "bg-zinc-800" : "bg-white"}  
            ${color === "green" && "ring-green-500"} 
            ${color === "yellow" && "ring-yellow-400"} 
            ${color === "red" && "ring-red-500"}
        `}
      >
        <Image
          className="rounded-full"
          src={image}
          alt={altText}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="skill-hover-overlay">
        <p className="skill-inner-text">{hoverText}</p>
      </div>
    </motion.div>
  );
}

export default Skill;
