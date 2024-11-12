import * as motion from "framer-motion/client";

export default function MovingCircles() {
  return (
    <div className="z-10 motion-preset-fade-lg fixed h-screen  w-1/3 left-1/2 -top-0 scale-[200%] origin-top -translate-x-1/2 overflow-visible bulr-3xl">
      <motion.img
        src="ell1.png"
        className=" "
        animate={{
          x: ["-40%", "40%", "-40%"],
          y: ["-10%", "-30%", "-10%", "-30%", "-10%"],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.img>
      <motion.img
        src="ell2.png"
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: ["-20%", "0", "-20%"],
        }}
        transition={{ duration: 16, repeat: Infinity }}
        className="top-0 absolute"
      ></motion.img>
    </div>
  );
}
