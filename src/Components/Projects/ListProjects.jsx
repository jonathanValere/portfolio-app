import data from "./data.json";
import ThumbnailProject from "./ThumbnailProject";

export default function ListProjects() {
  return (
    <ul className="list-projects">
      {data.map((projet) => (
        <li key={projet.id}>
          <ThumbnailProject imageThumbnail={projet.img} />
        </li>
      ))}
    </ul>
  );
}
