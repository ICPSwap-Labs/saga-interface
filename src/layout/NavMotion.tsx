import React from "react";
import { motion } from "framer-motion";

export function NavMotion({ children }: { children: React.ReactNode }) {
  const motionVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const motionTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={motionVariants} transition={motionTransition}>
      {children}
    </motion.div>
  );
}