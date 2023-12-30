export default function TitlePart({ projet, displayMore, more }) {
  return (
    <div className="project-part-title">
      <h4>
        <span>|</span> {projet.name ? projet.name : "Réplique Vinted"}
      </h4>
      <button
        onClick={displayMore}
        className={!more ? "btn-unCheck" : "btn-onClick"}
      >
        <i className="fa-solid fa-plus"></i> Plus d'informations
      </button>
    </div>
  );
}
