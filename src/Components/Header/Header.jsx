import classes from "./Header.module.css";
import Branding from "./Parts/Branding";
import Menu from "./Parts/Menu";

export default function Header() {
  return (
    <header className={classes.header}>
      <Branding />
      <Menu />
    </header>
  );
}
