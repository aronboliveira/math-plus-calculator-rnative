import { stringError, typeError } from "./handlersErrors";
import { normOutpNames, textTransformPascal } from "./handlersModel";
import * as Formulas from "../formulaTitles";
import * as Algebra from "../formulas/Algebra";
import * as Combinatorics from "../formulas/Combinator";
import * as Statistics from "../formulas/Statistics";
import * as Probability from "../formulas/Probability";
import * as Trigonometry from "../formulas/Trigonometry";
import * as Geometry from "../formulas/Geometry";

export const availableFormulas: {
  [k: string]: { [k: string]: { name: string; length: number } };
} = {};
// export function handleRouteToOprtGrp(
//   thisEl: DefineComponent | any,
//   btn: voidishHtmlEl,
//   toggleOpacity: boolean = false,
// ): void {
//   try {
//     if (
//       !(
//         btn instanceof HTMLButtonElement ||
//         (btn instanceof HTMLInputElement && btn.type === "button")
//       )
//     )
//       throw htmlElementNotFound(btn, `Validation of Btn instance`, [
//         'HTMLButtonElement, <input type="button">',
//       ]);
//     if (btn.innerText === "") throw stringError("Empty text", "/./+");
//     let name = /\s/g.test(btn.innerText)
//       ? btn.innerText
//           .slice(0, btn.innerText.indexOf(" "))
//           .toLowerCase()
//           .replaceAll(/\s\t\r\n/g, "")
//       : btn.innerText
//           .trim()
//           .toLowerCase()
//           .replaceAll(/\s\t\r\n/g, "");
//     name = /[a-z]/g.test(name) ? name : btn.innerText.replaceAll(/[\s\r\t\n]/g, "").toLowerCase();
//     history.pushState({}, "", `${location.origin}${location.pathname}?oprt-grp=${name}`);
//     try {
//       const pascalName = textTransformPascal(name);
//       const matchedFormulaArr = (Formulas as any)[`titles${pascalName}`];
//       if (!Array.isArray(matchedFormulaArr))
//         throw typeError(matchedFormulaArr, `Validation of Formula Array type`, ["Array"]);
//       if (matchedFormulaArr.length === 0) throw new Error(`List for formula group is empty.`);
//       const matchedInpFormulaArr = (Formulas as any)[`inpTitles${pascalName}`];
//       if (!Array.isArray(matchedInpFormulaArr))
//         throw typeError(matchedInpFormulaArr, `Validation of Inp for Formulas Array type`, [
//           "Array",
//         ]);
//       if (matchedInpFormulaArr.length === 0)
//         throw new Error(`List for formulas input group is empty.`);
//       const matchedLengFormulaArr = (Formulas as any)[`lengTitles${pascalName}`];
//       if (typeof matchedLengFormulaArr !== "object")
//         throw typeError(matchedLengFormulaArr, `Validation of lengths for Formulas Array type`, [
//           "object",
//         ]);
//       if (Object.values(matchedLengFormulaArr).length === 0)
//         throw new Error(`Object for formulas length group is empty.`);
//       const sectMain = document.getElementById("section-main");
//       if (!(sectMain instanceof HTMLElement))
//         throw htmlElementNotFound(sectMain, `Validation of Section Main`);
//       sectMain.innerHTML = ``;
//       if (toggleOpacity) {
//         sectMain.style.transition = sectMain.style.transition.replace("opacity 1s ease-in-out", "");
//         sectMain.style.opacity = "0";
//         setTimeout(() => {
//           sectMain.style.transition += "opacity 1s ease-in-out";
//           sectMain.style.opacity = "1";
//         }, 200);
//       }
//       const formulaValues = Object.values(matchedInpFormulaArr);
//       console.log("Formula values");
//       console.log(formulaValues);
//       for (let i = 0; i < formulaValues.length; i++) {
//         for (let j = 0; j < matchedFormulaArr.length; j++) {
//           try {
//             if (/algebra/gi.test(location.search)) {
//               const specificFormula =
//                 /number/gi.test(matchedFormulaArr[j]) && /roots/gi.test(matchedFormulaArr[j])
//                   ? "discriminant"
//                   : matchedFormulaArr[j];
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Algebra[`${normOutpNames(specificFormula)}`];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Algebra Formula to Operate. Used search: ${normOutpNames(
//                     specificFormula,
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.algebra) availableFormulas.algebra = {};
//               if (!(availableFormulas.algebra as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.algebra as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else if (/statistic/gi.test(location.search)) {
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Statistics[`${normOutpNames(matchedFormulaArr[j])}`];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Statistics Formula to Operate. Used search: ${normOutpNames(
//                     matchedFormulaArr[j],
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.statistics) availableFormulas.statistics = {};
//               if (!(availableFormulas.statistics as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.statistics as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else if (/probabil/gi.test(location.search)) {
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Probability[`${normOutpNames(matchedFormulaArr[j])}`];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Probability Formula to Operate. Used search: ${normOutpNames(
//                     matchedFormulaArr[j],
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.probability) availableFormulas.probability = {};
//               if (!(availableFormulas.probability as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.probability as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else if (/combinator/gi.test(location.search)) {
//               let specificFormula = "multisetPermutation";
//               if (!/multiset/gi.test(matchedFormulaArr[j])) {
//                 if (specificFormula === "permutationWithoutRepetition")
//                   specificFormula = "permutationWithoutRepetition";
//                 if (specificFormula === "circularPermutation")
//                   specificFormula = "circularPermutation";
//                 if (specificFormula === "distinctPermutationWithoutRepetition")
//                   specificFormula = "distinctPermutationWithoutRepetition";
//                 if (specificFormula === "distinctPermutationWithRepetition")
//                   specificFormula = "distinctPermutationWithRepetition";
//                 if (specificFormula === "combinationWithoutRepetition")
//                   specificFormula = "combinationWithoutRepetition";
//                 if (specificFormula === "combinationWithRepetition")
//                   specificFormula = "combinationWithRepetition";
//               }
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Combinatorics[specificFormula];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Combinatorics Formula to Operate. Used search: ${normOutpNames(
//                     matchedFormulaArr[j],
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.combinatorics) availableFormulas.combinatorics = {};
//               if (!(availableFormulas.combinatorics as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.combinatorics as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else if (/trigonometr/gi.test(location.search)) {
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Trigonometry[`${normOutpNames(matchedFormulaArr[j])}`];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Trigonometry Formula to Operate. Used search: ${normOutpNames(
//                     matchedFormulaArr[j],
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.trigonometry) availableFormulas.trigonometry = {};
//               if (!(availableFormulas.trigonometry as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.trigonometry as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else if (/geometr/gi.test(location.search)) {
//               const formulaToOperateFunc =
//                 //@ts-ignore
//                 Geometry[`${normOutpNames(matchedFormulaArr[j])}`];
//               if (typeof formulaToOperateFunc !== "function")
//                 throw typeError(
//                   formulaToOperateFunc,
//                   `Validation of Geometry Formula to Operate. Used search: ${normOutpNames(
//                     matchedFormulaArr[j],
//                   )}`,
//                   ["function"],
//                 );
//               if (!availableFormulas.geometry) availableFormulas.geometry = {};
//               if (!(availableFormulas.geometry as any)[`${formulaToOperateFunc.name}`])
//                 (availableFormulas.geometry as any)[`${formulaToOperateFunc.name}`] = {
//                   name: formulaToOperateFunc.name,
//                   length: matchedLengFormulaArr[`${formulaToOperateFunc.name}`],
//                 };
//             } else
//               throw stringError(
//                 location.search,
//                 "/algebra|statistic|probabl|combinator|trigonometr|geometr/gi",
//               );
//           } catch (e) {
//             console.error(
//               `Error executing iteration for matched output label:\n${(e as Error).message}`,
//             );
//           }
//         }
//         const defRelFormulasForInputs: string[] = [];
//         const indefRelFormulasForInputs: string[] = [];
//         if (/algebra/gi.test(location.search)) {
//           if (!availableFormulas.algebra) console.error(`No available formulas for algebra`);
//           else
//             for (const formula of Object.values(availableFormulas.algebra)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//             }
//         } else if (/statistic/gi.test(location.search)) {
//           if (!availableFormulas.statistics) console.error(`No available formulas for statistics`);
//           else
//             for (const formula of Object.values(availableFormulas.statistics)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//             }
//         } else if (/probabil/gi.test(location.search)) {
//           if (!availableFormulas.probability)
//             console.error(`No available formulas for probability`);
//           else
//             for (const formula of Object.values(availableFormulas.probability)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//               console.log(
//                 "for index " + (i + 1) + " " + formula.name + " with length " + formula.length,
//               );
//               console.log(defRelFormulasForInputs);
//             }
//         } else if (/combinator/gi.test(location.search)) {
//           if (!availableFormulas.combinatorics)
//             console.error(`No available formulas for combinatorics`);
//           else
//             for (const formula of Object.values(availableFormulas.combinatorics)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//             }
//         } else if (/trigonometr/gi.test(location.search)) {
//           if (!availableFormulas.trigonometry)
//             console.error(`No available formulas for trigonometry`);
//           else
//             for (const formula of Object.values(availableFormulas.trigonometry)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//             }
//         } else if (/geometr/gi.test(location.search)) {
//           if (!availableFormulas.geometry) console.error(`No available formulas for geometry`);
//           else
//             for (const formula of Object.values(availableFormulas.geometry)) {
//               if (formula.length === i + 1) defRelFormulasForInputs.push(formula.name);
//               else if (i + 1 === formulaValues.length && formula.length === Infinity)
//                 indefRelFormulasForInputs.push(formula.name);
//             }
//         } else
//           throw stringError(
//             location.search,
//             "/algebra|statistic|probabl|combinator|trigonometr|geometr/gi",
//           );
//         // console.log("List to concat");
//         // console.log(defRelFormulasForInputs);
//         let outpList: string[] = [];
//         if (defRelFormulasForInputs.length > 0) outpList = outpList.concat(defRelFormulasForInputs);
//         if (indefRelFormulasForInputs.length > 0)
//           outpList = outpList.concat(indefRelFormulasForInputs);
//         // console.log("Matched formulas");
//         // console.log(matchedFormulaArr);
//         console.log("Matched inps");
//         console.log(matchedInpFormulaArr);
//         // console.log("Matched lengths");
//         // console.log(matchedLengFormulaArr);
//         // console.log("Defined formulas");
//         // console.log(defRelFormulasForInputs);
//         // console.log("Indefined formulas");
//         // console.log(indefRelFormulasForInputs);
//         console.log("Output list");
//         console.log(outpList);
//         if (outpList.length > 0) {
//           const definedDivMain = thisEl.$createElement(DivMain, {
//             props: {
//               inpList: formulaValues[i],
//               outpList,
//             },
//           });
//           if (!("$el" in definedDivMain)) {
//             sectMain.appendChild(
//               new (Vue.extend(DivMain))({
//                 propsData: {
//                   inpList: formulaValues[i],
//                   outpList,
//                 },
//               }).$mount().$el,
//             );
//             continue;
//           }
//           sectMain.appendChild(definedDivMain.$el);
//         }
//       }
//     } catch (e) {
//       console.error(`Error executing procedure for updating resultsGrid:\n${(e as Error).message}`);
//     }
//   } catch (e) {
//     console.error(`Error executing routeToOptGrp:\n${(e as Error).message}`);
//   }
// }
