import { useState } from "react";
import StackTechno from "./StackTechno";
import reactLogo from "../../assets/img/icons/react.svg";
import reactNativeLogo from "../../assets/img/icons/react-native.svg";
import nodeLogo from "../../assets/img/icons/nodejs.svg";
import reduxLogo from "../../assets/img/icons/redux.svg";
import javascriptLogo from "../../assets/img/icons/javascript.svg";
import typescriptLogo from "../../assets/img/icons/typescript.svg";
import expressLogo from "../../assets/img/icons/express-js.svg";
import mongoLogo from "../../assets/img/icons/mongodb.svg";
import htmlLogo from "../../assets/img/icons/HTML.svg";
import cssLogo from "../../assets/img/icons/CSS.svg";
import jestLogo from "../../assets/img/icons/Jest.svg";
import gitLogo from "../../assets/img/icons/git.svg";
import tailwindLogo from "../../assets/img/icons/tailwind-css.svg";
import Image from "./Image";

export default function ContentTechno() {
  const [front, setFront] = useState(" ");
  const technofront = ["HTML", "CSS", "JavaScript", "TypeScript"];

  const handleMouseOver = (e) => {
    const value = e.target.title;
    if (technofront.includes(value)) {
      return setFront(value);
    }
  };
  // console.log(techno);
  return (
    <div className="wrapper-technos">
      <StackTechno title="FrontEnd" techno={front}>
        <Image
          imgSrc={htmlLogo}
          imgAlt="Logo HTML"
          title="HTML"
          handleMouse={handleMouseOver}
        />
        <Image
          imgSrc={cssLogo}
          imgAlt="Logo CSS"
          title="CSS"
          handleMouse={handleMouseOver}
        />
        <Image
          imgSrc={javascriptLogo}
          imgAlt="Logo JavaScript"
          title="JavaScript"
          handleMouse={handleMouseOver}
        />
        <Image
          imgSrc={typescriptLogo}
          imgAlt="Logo TypeScript"
          title="TypeScript"
          handleMouse={handleMouseOver}
        />
      </StackTechno>
      <StackTechno title="BackEnd">
        <Image
          imgSrc={nodeLogo}
          imgAlt="Logo NodeJs"
          title="Node"
          handleMouse={handleMouseOver}
        />
        <img src={expressLogo} alt="Logo de ExpressJs" title="Express" />
        <img src={mongoLogo} alt="Logo de MongoDB" title="Mongo" />
        <img src={reduxLogo} alt="Logo de Redux" title="Redux" />
      </StackTechno>
      <StackTechno title="Framework">
        <img src={reactLogo} alt="Logo de React" title="React" />
        <img
          src={reactNativeLogo}
          alt="Logo de React Native"
          title="React-Native"
        />
        <img src={tailwindLogo} alt="Logo de Tailwind" title="Tailwind" />
      </StackTechno>
      <StackTechno title="Testing & versioning">
        <img src={jestLogo} alt="Logo de Jest" title="Jest" />
        <img src={gitLogo} alt="Logo de Git" title="Git" />
      </StackTechno>
    </div>
  );
}
