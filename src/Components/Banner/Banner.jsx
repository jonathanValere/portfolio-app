import illusDevice from "../../assets/img/illustrations-device.png";

export default function Banner() {
  return (
    <div className="container banner">
      <article className="part">
        <h2>Jonathan VALERE</h2>
        <p>
          <span>
            {"< "}Développeur d'Applications Web & Mobile {" />"}
          </span>
        </p>
        <p>
          Conjuguer innovation, fonctionnalité et esthétique dans chaque ligne
          de code. Ensemble, créons une expérience en ligne captivante et
          personnalisée pour votre public cible.
        </p>
      </article>
      <img src={illusDevice} alt="Illustration code" />
    </div>
  );
}
