import Section from "../Section/Section";
import Articles from "./Articles";
import Article from "./Article";
import ContentAbout from "./ContentAbout";
import ContentTechno from "./ContentTechno";

export default function SectionTechnoAbout() {
  return (
    <>
      <Section color="bg-third-color" id="about">
        <Articles>
          <Article title="A propos">
            <ContentAbout />
          </Article>
          <Article title="Technologies">
            <ContentTechno />
          </Article>
        </Articles>
      </Section>
    </>
  );
}
