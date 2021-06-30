import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AppCard } from "../CardApp";

import "./apps-container.css";
import { motion } from "framer-motion";

const titleCardContainerAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 40,
  },
};

const seAllAnimationButton = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function getInitialsApps(appList, amountApps) {
  if (amountApps < 1) return;

  return appList.slice(0, amountApps);
}

export const AppsContainer = ({ title, apps, amount }) => {
  const [firstEight, setfirstEight] = useState();

  useEffect(() => {
    setfirstEight(getInitialsApps(apps, amount));
  }, [apps]);

  return (
    <section className='apps-container'>
      <header className='apps-container-header'>
        <motion.div
          className='apps-container-header-div-left'
          variants={titleCardContainerAnimation}
          initial='hidden'
          animate='visible'
        >
          <h1>{title}</h1>
          <span>{apps.length} Games</span>
        </motion.div>
        <motion.div
          className='apps-container-header-div-right'
          variants={seAllAnimationButton}
          initial='hidden'
          animate='visible'
        >
          <button>
            <span>See All</span>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </motion.div>
      </header>

      <div className='apps'>
        {firstEight &&
          firstEight.map((app, index) => {
            return <AppCard key={index} {...app} cardIndex={index} />;
          })}
      </div>
    </section>
  );
};
