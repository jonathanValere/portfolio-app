export default function Menu() {
  return (
    <>
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
    </>
  );
}
