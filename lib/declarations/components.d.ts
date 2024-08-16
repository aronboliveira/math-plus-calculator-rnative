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
