import { useNavigate, Link } from "react-router-dom";

import imageVinted from "/assets/img/vinted.png";
import DetailsSquelette from "./DetailsSquelette";

export default function DetailsProject({ more, closeMore, projet }) {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate(projet.url);
  };

  return (
    <article className="details-project">
      {more ? (
        <div className="more-information">
          <DetailsSquelette
            label="Intitulé du projet"
            detail={projet.name ? projet.name : "Réplique vinted"}
          />
          <DetailsSquelette
            label="Description"
            detail={projet.description ? projet.description : "Contenu Vinted"}
          />
          <DetailsSquelette
            label="Technologies"
            detail={
              projet.techno
                ? projet.techno.map((e) => (
                    <span key={e} className="language">
                      {e}
                    </span>
                  ))
                : "techno vinted"
            }
          />
          <div className="details-buttons">
            <button onClick={closeMore} className="btn-project">
              <i className="fa-solid fa-xmark"></i> Fermer
            </button>

            <Link className="link-goToProject" to={projet.url} target="blank">
              Voir le projet <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
      ) : (
        <img
          src={projet.img ? projet.img : imageVinted}
          alt={`image ${imageVinted}`}
        />
      )}
    </article>
  );
}
