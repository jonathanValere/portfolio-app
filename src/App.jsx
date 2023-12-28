import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Section from "./Components/Section/Section";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Banner />
        </Section>
      </Main>
    </>
  );
}

export default App;
