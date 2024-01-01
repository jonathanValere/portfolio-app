import "./Header.css";
import Branding from "./Parts/Branding";
import Menu from "./Parts/Menu";

export default function Header() {
  return (
    <header>
      <Branding />
      <Menu />
    </header>
  );
}
