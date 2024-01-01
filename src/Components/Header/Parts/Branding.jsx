import classes from "./Branding.module.css";
import logo from "../../../assets/img/logo.svg";

export default function Branding() {
  return (
    <div className={classes.branding}>
      <img src={logo} alt="Logo" />
      <p className={classes.paragraph}>
        Jonathan VALERE <br />
        <span className={classes.span}>
          Développeur d'Applications Web & Mobile
        </span>
      </p>
    </div>
  );
}
