import { rDlgProps } from "./interfaces";

export interface LabeledProps {
  txt: string;
  labCls?: string[];
}
export interface CalcElProps extends LabeledProps {
  idf?: string;
  clss?: string[];
}
export interface CalcInpProps extends CalcElProps {
  ph?: string;
  type?: "numeric" | "default";
}
export interface EntriesProps {
  inpList: string[];
}
export interface ResultsProps {
  outpList: string[];
}
export interface DivMainProps extends EntriesProps, ResultsProps {}
export interface AccordionListProps extends rDlgProps {
  n_titles: string[];
}
