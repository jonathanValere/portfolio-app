import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Section from "./Components/Section/Section";
import Banner from "./Components/Banner/Banner";
import Article from "./Components/About-techno/Article";
import Techno from "./Components/About-techno/Techno";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Banner />
        </Section>
        <Section color="grey">
          <div className="presentation container">
            <Article title="About me">
              <p>
                Mon parcours dans le développement web est un voyage continu où
                je m'efforce constamment de repousser les limites et de créer
                des expériences numériques exceptionnelles. J'ai acquis de
                solide base de la stack MERN (MongoDB, Express.js, React,
                Node.js), ainsi que d'autres technologies essentielles comme
                HTML et CSS, tout en abordant avec enthousiasme la résolution de
                problèmes complexes. Chaque ligne de code que j'écris est une
                source constante d'apprentissage et d'exploration, que ce soit
                côté serveur ou côté client. Mon engagement envers le
                développement web me pousse à constamment perfectionner mes
                compétences et à créer des solutions innovantes.
              </p>
            </Article>
            <Article title="Technologies">
              <Techno />
            </Article>
          </div>
        </Section>
      </Main>
    </>
  );
}

export default App;
