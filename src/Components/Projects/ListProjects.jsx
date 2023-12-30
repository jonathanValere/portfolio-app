import { useState } from "react";
// import data from "./data.json";
import ThumbnailProject from "./ThumbnailProject";

export default function ListProjects({ data, setProject }) {
  // Gestion du state Project ---
  const selectProject = (projet) => {
    return setProject(projet);
  };

  return (
    <ul className="list-projects">
      {data.map((projet) => (
        <li key={projet.id} onClick={() => selectProject(projet)}>
          <ThumbnailProject imageThumbnail={projet.img} />
        </li>
      ))}
    </ul>
  );
}
