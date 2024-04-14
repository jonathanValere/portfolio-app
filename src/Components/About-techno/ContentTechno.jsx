import StackTechno from "./StackTechno";
// stack front --
import javascriptLogo from "../../assets/img/icons/javascript.svg";
import typescriptLogo from "../../assets/img/icons/typescript.svg";
import htmlLogo from "../../assets/img/icons/HTML.svg";
import cssLogo from "../../assets/img/icons/CSS.svg";
// stack Back --
import nodeLogo from "../../assets/img/icons/nodejs.svg";
import expressLogo from "../../assets/img/icons/expressjs.svg";
import reduxLogo from "../../assets/img/icons/redux.svg";
import mongoLogo from "../../assets/img/icons/mongodb.svg";
// stack Framework & libraries
import reactLogo from "../../assets/img/icons/react.svg";
import reactNativeLogo from "../../assets/img/icons/react-native.svg";
import tailwindLogo from "../../assets/img/icons/tailwind-css.svg";
// stack Versioning & Testing
import jestLogo from "../../assets/img/icons/Jest.svg";
import gitLogo from "../../assets/img/icons/git.svg";

export default function ContentTechno() {
  return (
    <div className="wrapper-technos">
      <StackTechno
        title="Frontend"
        logos={[htmlLogo, cssLogo, javascriptLogo, typescriptLogo]}
      />
      <StackTechno title="Backend" logos={[nodeLogo, expressLogo, mongoLogo]} />
      <StackTechno
        title="Framework & librairies"
        logos={[reactLogo, reactNativeLogo, tailwindLogo, reduxLogo]}
      />
      <StackTechno title="Testing & versioning" logos={[jestLogo, gitLogo]} />
    </div>
  );
}
