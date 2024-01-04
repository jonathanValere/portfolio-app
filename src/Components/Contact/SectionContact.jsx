import Form from "./Forms/Form";
import HalfPart from "../HalfPart/HalfPart";
import styles from "./SectionContact.module.css";

export default function SectionContact() {
  return (
    <>
      <section className={styles.section} id="contact">
        <div className={styles.parts}>
          <HalfPart backColor="bg-primary-color" color="third-color">
            <h5>Me contacter</h5>
            <p>
              N'hésitez pas à me contacter via ce formulaire pour discuter de
              projets passionnants, de collaborations potentielles ou simplement
              pour échanger des idées. Je suis toujours ouvert aux nouvelles
              opportunités et aux conversations enrichissantes. <br />
              C'est un peu comme un formulaire magique - vous remplissez vos
              informations, ajoutez un soupçon d'idées brillantes, et je
              m'occupe du reste ! Vous pouvez également m'envoyer un pigeon
              voyageur ou un message en morse si vous préférez les méthodes
              classiques... mais sachez que le formulaire reste le meilleur
              moyen pour obtenir une réponse rapide.
            </p>
            <div className={styles.rs}>
              <a
                href="https://github.com/jonathanValere"
                title="profil GitHub"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-valere/"
                title="profil Linkedin"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </HalfPart>
          <HalfPart>
            <Form />
          </HalfPart>
        </div>
      </section>
    </>
  );
}
