import { factorial } from "./Algebra";
import { permutation } from "./Combinator";
import { arithmeticStandardDeviation } from "./Statistics";

export const simpleProbability = (a: number = 0, t: number = 0): number => a / t;
export const poissonDistribution = (l: number = 0, k: number = 0): number =>
  (Math.pow(l, k) * Math.exp(-l)) / factorial(k);
export const probabilityInAList = (a: any = 0, t: any[] = []): number =>
  t.reduce((count, cur) => (cur === a ? count + 1 : count), 0);
export const probabilityOfIntersectionOfIndependentEvents = (
  a: any = 0,
  b: any = 0,
  t: any[] | number = [],
): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? simpleProbability(a, t) * simpleProbability(b, t)
    : probabilityInAList(a, t as any[]) * probabilityInAList(b, t as any[]);
export const conditionalProbability = (a: any, b: any, t: any[] | number): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? probabilityOfIntersectionOfIndependentEvents(a, b, t) / simpleProbability(b, t)
    : probabilityOfIntersectionOfIndependentEvents(a, b, t) / probabilityInAList(b, t as any[]);
export const probabilityOfUnionOfIndependentEvents = (
  a: any = 0,
  b: any = 0,
  t: any[] | number = [],
): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? simpleProbability(a, t) +
      simpleProbability(b, t) -
      probabilityOfIntersectionOfIndependentEvents(a, b, t)
    : probabilityInAList(a, t as any[]) +
      probabilityInAList(b, t as any[]) -
      probabilityOfIntersectionOfIndependentEvents(a, b, t as any[]);
export const probabilityOfIntersectionOfDependentEvents = (
  a: any = 0,
  b: any = 0,
  t: any[] | number = [],
): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? simpleProbability(a, t) * conditionalProbability(a, b, t)
    : probabilityInAList(a, t as any[]) * conditionalProbability(a, b, t);
export const probabilityOfUnionOfDependentEvents = (
  a: any = 0,
  b: any = 0,
  t: any[] | number = [],
): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? simpleProbability(a, t) +
      simpleProbability(b, t) -
      probabilityOfIntersectionOfDependentEvents(a, b, t)
    : probabilityInAList(a, t as any[]) +
      probabilityInAList(b, t as any[]) -
      probabilityOfIntersectionOfDependentEvents(a, b, t);
export const bayesTheorem = (a: any = 0, b: any = 0, t: any[] | number = []): number =>
  typeof t === "number" && typeof a === "number" && typeof b === "number"
    ? (conditionalProbability(a, b, t) * simpleProbability(a, t)) / simpleProbability(b, t)
    : (conditionalProbability(a, b, t) * probabilityInAList(a, t as any[])) /
      probabilityInAList(b, t as any[]);
export const binomialDistributionForDiscreteVariables = (
  n: number = 0,
  k: number = 0,
  p: number = 0,
): number => permutation(n, k, false, true) * Math.pow(p, k) * Math.pow(1 - p, n - k);
export const binomialDistributionForContinuousVariables = (
  n: number = 0,
  k: number = 0,
  p: number = 0,
): number =>
  0.5 *
  (1 +
    (x => {
      const sign = x >= 0 ? 1 : -1;
      x = Math.abs(x);
      const t = 1.0 / (1.0 + p * x);
      return (
        sign *
        (1.0 -
          ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.28449673) * t +
            0.254829592) *
            t *
            Math.exp(-x * x))
      );
    })((k + 0.5 - n * p) / arithmeticStandardDeviation(n * p * (1 - p)) / Math.sqrt(2)));
export const expectedValue = (...ns: Array<[number, number]>): number =>
  ns.reduce((sum, [n, p]) => sum + n * p, 0);
