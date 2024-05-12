import classes from "./Branding.module.css";
import logo from "../../../assets/img/logo.svg";

export default function Branding() {
  return (
    <div className={classes.branding}>
      <img src={logo} alt="Logo" />
      <p className={classes.paragraph}>
        Jonathan VALERE <br />
        <span className={classes.span}>
          Formateur numérique | Concepteur d'applications web & mobile
        </span>
      </p>
    </div>
  );
}
