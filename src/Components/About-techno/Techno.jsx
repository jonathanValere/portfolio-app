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

export default function Techno() {
  return (
    <div className="wrapper-icons">
      <img src={reactLogo} alt="Logo de React" />
      <img src={reactNativeLogo} alt="Logo de React Native" />
      <img src={nodeLogo} alt="Logo de NodeJs" />
      <img src={expressLogo} alt="Logo de ExpressJs" />
      <img src={mongoLogo} alt="Logo de MongoDB" />
      <img src={reduxLogo} alt="Logo de Redux" />
      <img src={htmlLogo} alt="Logo de HTML" />
      <img src={cssLogo} alt="Logo de CSS" />
      <img src={javascriptLogo} alt="Logo de Javascript" />
      <img src={typescriptLogo} alt="Logo de Typescript" />
      <img src={jestLogo} alt="Logo de Jest" />
      <img src={gitLogo} alt="Logo de Git" />
    </div>
  );
}
