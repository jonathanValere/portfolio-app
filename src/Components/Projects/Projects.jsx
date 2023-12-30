import { useState } from "react";
import ContentProject from "./Project/ContentProject";
import Project from "./Project/Project";
import ListProjects from "./ListProjects";
import SubtitleSection from "../SubtitleSection";
import data from "./data.json";

export default function Projects() {
  const [project, setProject] = useState(1);
  console.log("Projects", project);
  return (
    <div className="container part-project">
      <SubtitleSection subtitle="Projets" color="third-color" />
      <Project>
        <ContentProject projet={project} />
      </Project>
      <ListProjects data={data} project={project} setProject={setProject} />
    </div>
  );
}
