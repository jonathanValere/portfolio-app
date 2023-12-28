import "../About-techno/Presentation.css";

export default function Article({ children, title }) {
  return (
    <article className="part">
      <h3>{title}</h3>
      <p className="shadow-title">{title}</p>
      <>{children}</>
    </article>
  );
}
