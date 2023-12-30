export default function TitlePart({ displayMore, more, name }) {
  return (
    <div className="project-part-title">
      <h4>
        {name} <span>|</span>
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
