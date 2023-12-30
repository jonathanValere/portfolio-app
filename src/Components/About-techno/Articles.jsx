import Article from "./Article";
import ContentAbout from "./ContentAbout";
import ContentTechno from "./ContentTechno";

export default function Articles() {
  return (
    <div className="presentation container">
      <Article title="About me">
        <ContentAbout />
      </Article>
      <Article title="Technologies">
        <ContentTechno />
      </Article>
    </div>
  );
}
