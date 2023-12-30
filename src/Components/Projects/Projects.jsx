import ContentProject from "./Project/ContentProject";
import Project from "./Project";
import ListProjects from "./ListProjects";
import SubtitleSection from "../SubtitleSection";

export default function Projects() {
  return (
    <div className="container part-project">
      <SubtitleSection subtitle="Projets" color="third-color" />
      <Project>
        <ContentProject name="Réplique Vinted" />
      </Project>
      <ListProjects />
    </div>
  );
}
