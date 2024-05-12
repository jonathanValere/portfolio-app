import "./Banner.css";
import Section from "../Section/Section";
import illusDevice from "../../assets/img/illustrations-device.png";

export default function Banner() {
  return (
    <Section>
      <div className="container banner">
        <article className="part">
          <h1>Jonathan VALERE</h1>
          <p>
            <span>
              {"< "}Formateur numérique | Concepteur d'applications web & mobile{" "}
              {" />"}
            </span>
          </p>
          <p>
            De l'<span className="strongWord">inclusion numérique</span> à la
            <span className="strongWord"> conception d'applications</span>,
            embarquez avec moi pour une aventure palpitante 🚀
          </p>
        </article>
        <img src={illusDevice} alt="Illustration code" />
      </div>
    </Section>
  );
}
