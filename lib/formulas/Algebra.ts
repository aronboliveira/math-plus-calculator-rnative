import { first50Primes } from "../formulaTitles";

export const factorial = (n: number = 0): number =>
  n <= 1 ? 1 : n * factorial(n - 1);
export const filledPrimes = [];
export function isPrimeByRootTrial(n: number): boolean {
  if (n <= 1) return false;
  if (n < 3 || n % 2 === 0 || n % 3 === 0) return true;
  for (let i = 5; i ** 2 <= n; i += 6)
    if (n % i === 0 || n % (i + 2) === 0) return false;
  return true;
}
export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n < 3 || n % 2 === 0 || n % 3 === 0) return true;
  const prevNums = [];
  for (let i = 5; i < n; i++) {
    prevNums.push(i);
    if (n % i === 0 || prevNums.some((prevNum) => n % prevNum === 0))
      return false;
  }
  return true;
}
export const linearFormula = (a: number = 0, b: number = 0): number => -(b / a);
export const differenceOfSquares = (a: number = 0, b: number = 0): number =>
  Math.sqrt((a + b) * (a - b) + b ** 2);
export const applyAsDiffMean = (a: number = 0, n: number = 0): number =>
  n <= 0 ? 0 : a / (n - 1);
export function discriminant(
  a: number = 0,
  b: number = 0,
  c: number = 0
): {
  nRoots: number;
  value: number;
} {
  let value =
    Math.sign(b ** 2 - 4 * a * c) * Math.sqrt(Math.abs(b ** 2 - 4 * a * c));
  let nRoots = 1;
  if (value > 0) nRoots = 2;
  if (value < 0) nRoots = 0;
  if (!Number.isFinite(value)) {
    value = 0;
    nRoots = 0;
  }
  return {
    nRoots,
    value,
  };
}
export const quadraticFormula = (
  a: number = 0,
  b: number = 0,
  c: number = 0
): number => (-b + discriminant(a, b, c).value) / (2 * a);
export const commonDifferenceOfArithmeticSeries = (
  a1: number = 0,
  an: number = 0,
  n: number = 0
): number => (n <= 0 ? 0 : applyAsDiffMean(an - a1, n));
export const nthTermOfArithmeticSeries = (
  a1: number = 0,
  n: number = 0
): number => a1 + (n - 1) * commonDifferenceOfArithmeticSeries(a1, a1 * n, n);
export const sumOfArithmeticSeries = (
  a1: number = 0,
  an: number = 0,
  n: number = 0
): number => (n <= 0 ? 0 : (an + a1) * (n / 2));
export const reasonForGeometricSeries = (
  an: number = 0,
  an_1: number = 0
): number => (an_1 === 0 ? 0 : an / an_1);
export const nthTermOfGeometricSeries = (
  a1: number = 0,
  an: number = 0,
  n: number = 0
): number => (n <= 0 ? 0 : a1 * reasonForGeometricSeries(an, a1) ** (n - 1));
export const sumOfGeometricSeries = (
  a1: number = 0,
  an: number = 0,
  n: number = 0,
  infinite: boolean = false
): number =>
  n <= 0
    ? 0
    : infinite
    ? a1 / (1 - reasonForGeometricSeries(an, a1))
    : reasonForGeometricSeries(an, a1) === 1
    ? a1 * n
    : (a1 * (reasonForGeometricSeries(an, a1) ** n - 1)) /
      (reasonForGeometricSeries(an, a1) - 1);
export function binomialTheorem(
  a: number = 0,
  b: number = 0,
  n: number = 0,
  subtr: boolean = false
): number {
  const nInt = n - 1;
  let op = 1,
    res = a ** n + b ** n,
    pow_1 = n - 1,
    pow_2 = 1;
  if (subtr === true) op = -1;
  for (let i = 0; i <= nInt; i++) {
    i === 0 || i % 2 === 0
      ? (res +=
          op *
          ((n * (n - pow_2)) / factorial(pow_2 + 1)) *
          a ** pow_1 *
          b ** pow_2)
      : (res +=
          ((n * (n - pow_2) * (n - (pow_2 + 1))) / factorial(pow_2 + 1)) *
          a ** pow_1 *
          b ** pow_2);
    if (pow_1 > 0) --pow_1;
    ++pow_2;
  }
  return res;
}
export const cubicFormula = (
  a: number = 0,
  b: number = 0,
  c: number = 0,
  d: number = 0,
  x: number = 0
): number => a * x ** 3 + b * x ** 2 + c * x + d;
export function decomposeByPrimes(...ns: number[]): {
  divisiblePrimes: number[];
  allDivisiblePrimes: number[];
} {
  if (ns.length === 0) return { divisiblePrimes: [], allDivisiblePrimes: [] };
  const primeList = filledPrimes.length > 0 ? filledPrimes : first50Primes;
  let divisiblePrimes: number[] = [];
  let allDivisiblePrimes: number[] = [];
  let dividedNums: number[] = [...ns];
  let safeAcc = 0;
  while (dividedNums.some((n) => n > 1)) {
    if (safeAcc > 9999) {
      dividedNums = [];
      break;
    }
    for (let j = 0; j < primeList.length; j++) {
      if (ns.some((n) => n % primeList[j] === 0)) {
        divisiblePrimes.push(primeList[j]);
        if (ns.every((n) => n % primeList[j] === 0))
          allDivisiblePrimes.push(primeList[j]);
        dividedNums = dividedNums.map((n) => n / primeList[j]);
        break;
      }
    }
  }
  if (divisiblePrimes.some((n) => !Number.isFinite(n))) {
    divisiblePrimes = [];
    allDivisiblePrimes = [];
  }
  return {
    divisiblePrimes,
    allDivisiblePrimes,
  };
}
export function leastCommonMultiple(...ns: number[]): number {
  const dps = decomposeByPrimes(...ns).divisiblePrimes;
  return dps.length > 0 ? dps.reduce((acc, n) => (acc *= n), 0) : 0;
}
export function greatestCommonDivisor(...ns: number[]): number {
  const adps = decomposeByPrimes(...ns).allDivisiblePrimes;
  return adps.length > 0 ? adps.reduce((acc, n) => (acc *= n), 0) : 0;
}

export class Algebra {
  static factorial(n: number = 0): number {
    return n === 0 || n === 1 ? 1 : n * this.factorial(n - 1);
  }
  static linearEquation(a: number = 0, b: number = 0): number {
    return -(b / a);
  }
  static quadraticEquation(
    a: number = 0,
    b: number = 0,
    c: number = 0
  ): number {
    return (
      (-b +
        Math.sign(b ** 2 - 4 * a * c) *
          Math.sqrt(Math.abs(b ** 2 - 4 * a * c))) /
      (2 * a)
    );
  }
  static cubicEquation(
    a: number = 0,
    b: number = 0,
    c: number = 0,
    d: number = 0,
    x: number = 0
  ): number {
    return a * x ** 3 + b * x ** 2 + c * x ** 1 + d;
  }
  static diffSquares(a: number = 0, b: number = 0): number {
    return Math.sqrt((a + b) * (a - b) + b ** 2);
  }
  static binm(
    a: number = 0,
    b: number = 0,
    n: number = 0,
    subtr: boolean = false
  ): number {
    const nInt = n - 1;
    let op = 1,
      res = a ** n + b ** n,
      pow_1 = n - 1,
      pow_2 = 1;
    if (subtr === true) op = -1;
    for (let i = 0; i <= nInt; i++) {
      i === 0 || i % 2 === 0
        ? (res +=
            op *
            ((n * (n - pow_2)) / this.factorial(pow_2 + 1)) *
            a ** pow_1 *
            b ** pow_2)
        : (res +=
            ((n * (n - pow_2) * (n - (pow_2 + 1))) /
              this.factorial(pow_2 + 1)) *
            a ** pow_1 *
            b ** pow_2);
      if (pow_1 > 0) --pow_1;
      ++pow_2;
    }
    return res;
  }
}
