import { voidishStr } from "../declarations/types";
import { voidish } from "../declarations/types";

export function ListError(
  list:
    | Array<any>
    | NodeListOf<any>
    | HTMLCollectionOf<any>
    | Map<any, any>
    | Set<any>
    | undefined,
  expectedNSs: string[],
  context: string,
  ...elements: any[]
): Error {
  try {
    if (
      ((Array.isArray(list) ||
        list instanceof NodeList ||
        list instanceof HTMLCollection) &&
        list.length > 0) ||
      (list instanceof Map && Array.from(list.entries()).length > 0) ||
      (list instanceof Set && list.size > 0)
    ) {
      if (
        Array.isArray(expectedNSs) &&
        expectedNSs.length > 0 &&
        expectedNSs.every((exp) => typeof exp === "string")
      ) {
        if (Array.isArray(elements) && elements.length > 0) {
          const listError: Error =
            new Error(`Error: system experienced an error while getting list elements ${
              context || "null"
            }.
          Obtained List: ${list || "undefined"}`);
          console.error(listError);
          return listError;
        } else
          throw new Error(
            `Error validating array of elements. Obtained length: ${
              elements.length || 0
            }`
          );
      } else
        throw new Error(
          `Error capturing Expected namespaces. Obtained values: ${
            [...expectedNSs.map((ns) => ns.constructor.name)].toString() || -1
          };
          Context: ${context}`
        );
    } else
      throw new Error(
        `Error capturing elements for List. Instances obtained: ${
          (list?.constructor.name as any)?.toString() || -1
        };
        Context: ${context}`
      );
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
    return err as Error;
  }
}

export function typeError(
  value: any,
  context: string,
  acceptedTypes: string[]
): Error {
  const message = `TYPE ERROR:
  The page experienced an error while validating the type of a variable or constant for ${
    context || "Undetermined context"
  }.
  Obtained value: ${value ?? "nullish"};
  Accepted Types: ${JSON.stringify(acceptedTypes)
    .replace("[", "")
    .replace("]", "")}`;
  console.error(message);
  return new Error(message);
}

export function numberError(value: any, context: string): Error {
  const message = `NUMBER ERROR:
  The page experienced an error while validating a variable or constant number for ${
    context || "Undetermined context"
  }.
  Obtained value: ${value ?? "nullish"}`;
  console.error(message);
  return new Error(message);
}

export function stringError(
  fetchedStr: voidishStr,
  expectedPattern: string
): Error {
  const message = `STRING ERROR: 
  Obtained value ${fetchedStr};
  Expected pattern of value: ${expectedPattern}`;
  console.error(message);
  return new Error(message);
}

export function argsError(acceptedTypes: string[], ...values: any[]): Error {
  let message = `ARGUMENTS ERROR:
  The webpage experienced an error while trying to argument for a function
  Accepted Types: ${JSON.stringify(acceptedTypes)
    .replace("[", "")
    .replace("]", "")}`;
  for (let v = 0; v < values.length; v++)
    message += `\nObtained Value and Instance: ${values[v] ?? "nullish"}, ${
      values[v].constructor.name
    }`;
  console.error(message);
  return Error(message);
}

export function fetchError(res: Response): Error {
  const msg = `FETCH ERROR:
  ok: ${res.ok ?? "nullish"};
  status: ${res.status || "falsish"};
  text: ${res.statusText || "falsish"}
  redirected: ${res.redirected ?? "nullish"}`;
  console.error(msg);
  return new Error(msg);
}
