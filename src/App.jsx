import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Banner from "./Components/Banner/Banner";
import SectionTechnoAbout from "./Components/About-techno/SectionTechnoAbout";
import SectionProjects from "./Components/Projects/SectionProjects";
import SectionContact from "./Components/Contact/SectionContact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <SectionTechnoAbout />
        <SectionProjects />
        <SectionContact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
