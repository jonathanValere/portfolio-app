import imageVinted from "/assets/img/vinted.png";
import DetailsSquelette from "./DetailsSquelette";

export default function DetailsProject({ more, name, closeMore }) {
  return (
    <article className="details-project">
      {more ? (
        <div className="more-information">
          <DetailsSquelette category="Intitulé du projet" detail={name} />
          <DetailsSquelette
            category="Description"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa
            impedit voluptate sapiente? Quod nesciunt ullam consequuntur quia
            eaque asperiores, natus sunt ut! Illo facere dicta commodi nesciunt
            alias nam!"
          />
          <DetailsSquelette
            category="Technologies"
            detail="JavaScript, React, Express"
          />
          <button onClick={closeMore} className="btn-project">
            <i className="fa-solid fa-xmark"></i> Fermer
          </button>
          <button className="btn-project">
            Voir le projet <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      ) : (
        <img src={imageVinted} alt={`image ${imageVinted}`} />
      )}
    </article>
  );
}
