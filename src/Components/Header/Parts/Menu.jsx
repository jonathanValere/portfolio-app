import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <>
      <button className={styles.menuSmartphone}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={styles.menu}>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a className={styles.call} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-moon"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
