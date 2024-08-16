// export function addOprtTarg(title: string, targEl: voidishEl): void {
//   try {
//     if (typeof title !== "string")
//       throw typeError(title, `Validation of title arg for addOprtTarg`, ["string"]);
//     if (!(targEl instanceof HTMLElement))
//       throw htmlElementNotFound(targEl, `Validation of targEl arg for addOprtTarg`);
//     const relDivMain = targEl.closest(".div-main");
//     if (!(relDivMain instanceof HTMLElement))
//       throw htmlElementNotFound(relDivMain, `Validation of related div-main`);
//     const btnCalc = relDivMain.querySelector(".btn-calc-values");
//     if (!(btnCalc instanceof HTMLElement))
//       throw htmlElementNotFound(btnCalc, `Validation of Button for Calculation instance`);
//     nextTick(() => {
//       try {
//         let oprtOutp: voidishHtmlEl = targEl;
//         if (!targEl.classList.contains("result-output")) oprtOutp = targEl.querySelector("output");
//         if (!(oprtOutp instanceof HTMLElement))
//           throw htmlElementNotFound(oprtOutp, `Validation of inner output instance`);
//         if (!oprtOutp.dataset.operation) oprtOutp.dataset.operation = "";
//         oprtOutp.dataset.operation = oprtOutp.id;
//         setTimeout(() => {
//           let oprtOutp: voidishHtmlEl = targEl;
//           if (!targEl.classList.contains("result-output"))
//             oprtOutp = targEl.querySelector("output");
//           if (!(oprtOutp instanceof HTMLElement))
//             throw htmlElementNotFound(oprtOutp, `Validation of inner output instance`);
//           if (!oprtOutp.dataset.operation || oprtOutp.dataset.operation === "")
//             oprtOutp.dataset.operation = title.toLowerCase().replaceAll(/[\s\+\-\*~>\.#]/g, "_");
//           if (!(oprtOutp instanceof HTMLInputElement)) {
//             if (!btnCalc.dataset.operations) btnCalc.dataset.operations = "";
//             btnCalc.dataset.operations += oprtOutp.dataset.operation + "__";
//           }
//         }, 300);
//       } catch (e) {
//         console.error(`Error executing procedure for nextTick:\n${(e as Error).message}`);
//       }
//     });
//   } catch (e) {
//     console.error(
//       `Error executing addOprtTarg for ${targEl?.id || "undefined target"}:${(e as Error).message}`,
//     );
//   }
// }
