import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Section from "./Components/Section/Section";
import Banner from "./Components/Banner/Banner";
import Articles from "./Components/About-techno/Articles";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Banner />
        </Section>
        <Section color="bg-third-color">
          <Articles />
        </Section>
        <Section>
          <Projects />
        </Section>
      </Main>
    </>
  );
}

export default App;
