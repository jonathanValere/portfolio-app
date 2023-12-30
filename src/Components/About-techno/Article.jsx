import "../About-techno/Presentation.css";
import SubtitleSection from "../SubtitleSection";

export default function Article({ children, title }) {
  return (
    <article className="part">
      <SubtitleSection subtitle={title} color="blue" />
      {children}
    </article>
  );
}
