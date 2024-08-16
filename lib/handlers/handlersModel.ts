import { looseNum, numSets } from "../declarations/types";
import { stringError, typeError } from "./handlersErrors";
import { parseFinite } from "./handlersMath";

export function capitalizeFirstLetter(text: string): string {
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `type of argument for capitalizeFirstLetter`, [
        "string",
      ]);
    text = `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
    return text;
  } catch (e) {
    console.error(
      `Error executing capitalizeFirstLetter:\n${(e as Error).message}`
    );
    return text.toString();
  }
}

export function textTransformPascal(text: string): string {
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `type of argument for capitalizeFirstLetter`, [
        "string",
      ]);
    text = `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`;
    return text;
  } catch (e) {
    console.error(
      `Error executing capitalizeFirstLetter:\n${(e as Error).message}`
    );
    return text.toString();
  }
}

export function normalizeReadText(
  text: string,
  cicle: string = "No cicle",
  context: string = "No context"
): string {
  let formatText = text;
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `checking argument for normalizeReadText`, [
        "string",
      ]);
    formatText = `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
    const separatorMatches = formatText.matchAll(/-(?=[a-z])(?!bin)/g);
    //@ts-ignore
    for (const separator of separatorMatches) {
      const execMatch = /-(?=[a-z])(?!bin)/g.exec(formatText);
      if (execMatch) {
        const indx = execMatch.index;
        formatText = `${formatText.slice(0, indx + 1)}${formatText[
          indx + 1
        ].toUpperCase()}${formatText.slice(indx + 2)}`;
      }
    }
    formatText = formatText.replaceAll("_", " ").replaceAll(/-(?!bin)/gi, ", ");
    let safeAcc = 0;
    while (/[a-z]/gi.test(formatText)) {
      safeAcc++;
      let idx = /[a-z]/gi.exec(formatText)?.index ?? 0;
      if (idx) {
        idx = ++idx;
        formatText = `${formatText.slice(0, idx)} ${formatText.slice(idx)}`;
      }
      if (safeAcc > 100) break;
    }
    if (/familyname/gi.test(formatText.replaceAll(" ", "")))
      formatText += `(s)`;
    return formatText;
  } catch (e) {
    console.error(
      `Error executing normalizeReadText for cicle ${
        cicle || "undefined"
      } and context ${context || "undefined"}:${(e as Error).message}`
    );
  }
  return formatText;
}

export function normalizeNumber(
  num: looseNum,
  numCase: numSets = "natural"
): looseNum {
  try {
    if (!(typeof num === "number" || typeof num === "string"))
      throw typeError(num, "number argument for normalizeNumber", [
        "number",
        "string",
      ]);
    if (num !== "") {
      if (typeof num === "string") num = parseFinite(num, "int");
      if (!(typeof numCase === "string"))
        throw typeError(numCase, `numCase argument for normalizeNumber`, [
          "string",
        ]);
      if (
        !(
          numCase === "whole" ||
          numCase === "natural" ||
          numCase === "integer" ||
          numCase === "rational" ||
          numCase === "real"
        )
      )
        throw stringError(numCase, "any name for a set of numbers");
      switch (numCase) {
        case "whole":
          if (num < 1) num = 1;
          return num;
        case "natural":
          if (num < 0) num = 0;
          return num;
        case "integer":
          const initialNum = num;
          num = parseFinite(
            typeof num === "number" ? num.toFixed(1) : num,
            "int",
            initialNum
          );
          return num;
        case "rational":
          return num;
        case "real":
          return num;
        default:
          throw stringError(numCase, "any name for a set of numbers");
      }
    } else return num;
  } catch (e) {
    console.error(`Error executing normalizeNumber:\n${(e as Error).message}`);
    return "1";
  }
}

export const normOutpNames = (outp: string) =>
  regularToCamel(
    outp
      .replaceAll(/\s\'/g, "")
      .replaceAll("-", "__")
      .replace(/bayes'/gi, "bayes")
      .replace("pearson's", "pearsons")
  );

export function symbolizeInfinite(n: number = 0): string {
  try {
    if (!n) return `#ERROR`;
    if (Number.isFinite(n)) return `${n}`;
    return Number.isNaN(n) ? `#ERROR` : "∞";
  } catch (e) {
    console.error(
      `Error executing symbolizeInfinite:\n${(e as Error).message}`
    );
    return `#ERROR`;
  }
}

export function normalizeSpacing(value: string): string {
  try {
    if (typeof value !== "string")
      throw typeError(
        normalizeSpacing,
        `validation of value argument for normalizeSpacing`,
        ["string"]
      );
    return value.replaceAll(",", "_").replaceAll(" ", "_");
  } catch (e) {
    console.error(`Error executing normalizeSpacing:\n${(e as Error).message}`);
    return value;
  }
}

export function camelToKebab(str: string): string {
  const iniStr = str;
  try {
    return str
      .split(/(?=[A-Z])/g)
      .join("-")
      .toLowerCase();
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function kebabToCamel(str: string): string {
  const iniStr = str;
  try {
    return str
      .split("-")
      .map((fragment, i) =>
        i === 0 ? fragment : textTransformPascal(fragment)
      )
      .join("");
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function regularToCamel(str: string): string {
  const iniStr = str;
  try {
    return str
      .split(" ")
      .map((fragment, i) =>
        i === 0 ? fragment.toLowerCase() : textTransformPascal(fragment)
      )
      .join("");
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function camelToRegular(str: string): string {
  const iniStr = str;
  try {
    return str
      .split(/[A-Z]/g)
      .map((fragment) => textTransformPascal(fragment))
      .join(" ");
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function normalizeAccents(
  str: string,
  insensitive: boolean = true
): string {
  try {
    if (typeof str !== "string")
      throw typeError(str, `Validation of str argument for normalizeAccents`, [
        "string",
      ]);
    if (typeof insensitive !== "boolean")
      throw typeError(
        insensitive,
        `Validation of insensitive argument for normalizeAccents`,
        ["boolean"]
      );
    return insensitive
      ? str
          .replaceAll(/[àáäâã]/gi, "a")
          .replaceAll(/[èéêë]/gi, "e")
          .replaceAll(/[ìíïî]/gi, "i")
          .replaceAll(/[òóôöõ]/gi, "o")
          .replaceAll(/[ùúüû]/gi, "u")
      : str
          .replaceAll(/[àáäâã]/g, "a")
          .replaceAll(/[ÀÁÄÂÃ]/g, "A")
          .replaceAll(/[èéêë]/g, "e")
          .replaceAll(/[ÈÉÊË]/g, "E")
          .replaceAll(/[ìíïî]/g, "i")
          .replaceAll(/[ÌÍÏÎ]/g, "I")
          .replaceAll(/[òóôöõ]/g, "o")
          .replaceAll(/[ÒÓÔÖÕ]/, "O")
          .replaceAll(/[ùúüû]/g, "u")
          .replaceAll(/[ÙÚÜÛ]/g, "U");
  } catch (e) {
    console.error(`Error executing normalizeAccents:\n${(e as Error).message}`);
    return str;
  }
}
