import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./StackTechno.module.css";

export default function StackTechno({ title, logos }) {
  const [techno, setTechno] = useState(" ");

  // Animation motion --
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  // --------------

  const handleMouseOver = (url) => {
    const techno = url.split("/").pop().split(".")[0].toUpperCase();
    return setTechno(techno);
  };

  const handleMouseOut = () => {
    setTechno("");
  };

  const ListLogos = () => {
    return (
      <ul className="wrapper-icons">
        {logos.map((logo) => (
          <img
            key={logo}
            src={logo}
            onMouseOver={() => handleMouseOver(logo)}
            onMouseOut={() => handleMouseOut()}
          />
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      className={styles.stack}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <p>
        <strong className={styles.important}>{title}</strong>
      </p>
      <ListLogos />
      <p className={styles.nameTechno}>{techno}</p>
    </motion.div>
  );
}
