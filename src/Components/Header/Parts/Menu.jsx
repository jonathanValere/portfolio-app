import classes from "./Menu.module.css";

export default function Menu() {
  return (
    <>
      <button className={classes.menuSmartphone}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={classes.menu}>
        <li>
          <a href="#">A propos</a>
        </li>
        <li>
          <a href="#">Compétences</a>
        </li>
        <li>
          <a href="#">Projets</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
