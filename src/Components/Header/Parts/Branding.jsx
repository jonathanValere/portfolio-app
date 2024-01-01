import logo from "../../../assets/img/logo.svg";

export default function Branding() {
  return (
    <div className="branding">
      <img src={logo} alt="Logo" />
      <p>
        Jonathan VALERE <br />
        <span>Développeur d'Applications Web & Mobile</span>
      </p>
    </div>
  );
}
