import StackedAccordionIcon from "./StackedAccordion";
import { useState } from "react";

export default function AccordionWrapper(): JSX.Element {
  const [showAccordion, setAccordion] = useState<boolean>(false);
  return (
    <>
      <StackedAccordionIcon dp={setAccordion} st={showAccordion} />
      {/* accordionlist */}
    </>
  );
}
