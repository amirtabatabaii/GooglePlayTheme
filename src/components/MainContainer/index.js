import React from "react";

import "./main-container.css";
import { motion } from "framer-motion";

const opacityAndMoveAnimation = {
  visible: {
    opacity: 1,
    y: "15vh",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export const MainContainer = ({ children }) => {
  return (
    <motion.main
      variants={opacityAndMoveAnimation}
      initial='hidden'
      animate='visible'
    >
      <div className='main-content'>{children}</div>
    </motion.main>
  );
};
