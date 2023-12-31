import { useState } from "react";
import Section from "../Section/Section";
import Projects from "./Projects";
import ContentProject from "./Project/ContentProject";
import Project from "./Project/Project";
import ListProjects from "./ListProjects";
import SubtitleSection from "../SubtitleSection";
import data from "./data.json";

export default function SectionProjects() {
  const [project, setProject] = useState(1);
  return (
    <Section>
      <Projects>
        <SubtitleSection subtitle="Projets" color="third-color" />
        <Project>
          <ContentProject projet={project} />
        </Project>
        <ListProjects data={data} project={project} setProject={setProject} />
      </Projects>
    </Section>
  );
}
