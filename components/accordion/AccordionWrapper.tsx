import AccordionList from "./AccordionList";
import StackedAccordionIcon from "./StackedAccordion";
import { useState } from "react";

export default function AccordionWrapper(): JSX.Element {
  const [showAccordion, setAccordion] = useState<boolean>(false);
  return (
    <>
      <StackedAccordionIcon dp={setAccordion} st={showAccordion} />
      <AccordionList
        n_titles={[
          "Algebra",
          "Combinatorics",
          "Probability",
          "Statistics",
          "Trigonometry",
          "Geometry",
        ]}
        dp={setAccordion}
        st={showAccordion}
      />
    </>
  );
}
