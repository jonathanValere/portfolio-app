import "./Header.css";
import logo from "../../assets/img/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="branding">
        <img src={logo} alt="Logo" />
        <p>
          Jonathan VALERE <br />
          <span>Développeur d'Applications Web & Mobile</span>
        </p>
      </div>
      <button className="menu-smartphone">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="menu">
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
    </header>
  );
}
