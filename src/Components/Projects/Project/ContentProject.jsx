import { useState } from "react";

import TitlePart from "./TitlePart";
import DetailsProject from "./DetailsProject";

export default function ContentProject({ name }) {
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
      <TitlePart displayMore={displayMore} more={more} name={name} />
      <DetailsProject closeMore={closeMore} more={more} name={name} />
    </>
  );
}
