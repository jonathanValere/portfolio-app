import { useState } from "react";

import TitlePart from "./TitlePart";
import DetailsProject from "./DetailsProject";

export default function ContentProject({ projet, name }) {
  console.log("Content project >>", projet);
  // State
  const [more, setMore] = useState(false);
  // Gestion "plus d'informations"
  const displayMore = () => {
    setMore(true);
  };

  const closeMore = () => {
    setMore(false);
  };
  // Render
  return (
    <>
      <TitlePart displayMore={displayMore} more={more} projet={projet} />
      <DetailsProject closeMore={closeMore} more={more} projet={projet} />
    </>
  );
}
