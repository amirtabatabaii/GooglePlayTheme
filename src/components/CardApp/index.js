import React from "react";

import "./card-app.css";
import { motion } from "framer-motion";

const cardAnimate = {
  visible: (cardIndex) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (cardIndex + 9) * 0.05,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),

  hidden: {
    opacity: 0,
    y: 45,
    duration: 1,
    ease: "easeInOut",
  },
};

export const AppCard = ({
  thumbnail,
  title,
  publisher,
  cardIndex,
  game_url,
  genre,
}) => {
  return (
    <a href={game_url} target='_blank'>
      <motion.figure
        className='card-app'
        variants={cardAnimate}
        custom={cardIndex}
        initial='hidden'
        animate='visible'
      >
        <img src={thumbnail} />

        <figcaption>
          <p title={title}>{title}</p>
          <p title={publisher}>{publisher}</p>
          <p title={genre}>{genre}</p>
        </figcaption>
      </motion.figure>
    </a>
  );
};
