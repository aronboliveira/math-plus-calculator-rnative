export const sine = (θ: number = 0): number => Math.sin(θ);
export const cosine = (θ: number = 0): number => Math.cos(θ);
export const tangent = (θ: number = 0): number => Math.tan(θ);
export const cosecant = (θ: number = 0): number => 1 / Math.sin(θ);
export const secant = (θ: number = 0): number => 1 / Math.cos(θ);
export const cotangent = (θ: number = 0): number => 1 / Math.tan(θ);
export const halvedAngledSine = (θ: number = 0): number => Math.sqrt((1 - Math.cos(θ)) / 2);
export const halvedAngledCosine = (θ: number = 0): number => Math.sqrt((1 + Math.sin(θ)) / 2);
export const halvedAngleTangent = (θ: number = 0): number =>
  Math.sqrt((1 - Math.cos(θ)) / (1 + Math.cos(θ)));
export const doubleAngledSine = (θ: number = 0): number => 2 * Math.sin(θ) * Math.cos(θ);
export const doubleAngledCosine = (θ: number): number => Math.cos(θ) ** 2 - Math.sin(θ) ** 2;
export const doubleAngledTangent = (θ: number): number =>
  (2 * Math.tan(θ)) / (1 - Math.tan(θ) ** 2);
export const tripleAngledSine = (θ: number = 0): number => 3 * Math.sin(θ) - 4 * Math.sin(θ) ** 3;
export const tripleAngledCosine = (θ: number = 0): number => 4 * Math.cos(θ) ** 3 - 3 * Math.cos(θ);
export const tripleAngledTangent = (θ: number = 0): number =>
  (3 * Math.tan(θ) - Math.tan(θ) ** 3) / (1 - 3 * Math.tan(θ) ** 2);
export const sineAsCofunction = (θ: number = 0): number => Math.sin(Math.PI / 2 - θ);
export const cosineAsCofunction = (θ: number = 0): number => Math.cos(Math.PI / 2 - θ);
export const tangentAsCofunction = (θ: number = 0): number => Math.tan(Math.PI / 2 - θ);
export const cosecantAsCofunction = (θ: number = 0): number => cosecant(Math.PI / 2 - θ);
export const secantAsCofunction = (θ: number = 0): number => secant(Math.PI / 2 - θ);
export const cotangentAsCofunction = (θ: number = 0): number => cotangent(Math.PI / 2 - θ);
export const sineWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(1 - Math.cos(θ) ** 2);
export const cosineWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(1 - Math.sin(θ) ** 2);
export const tangentWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(secant(θ) ** 2 - 1);
export const secantWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(Math.tan(θ) ** 2 + 1);
export const cotangentWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(cosecant(θ) ** 2 - 1);
export const cosecantWithPythagoreanIdentity = (θ: number = 0): number =>
  Math.sqrt(cotangent(θ) ** 2 + 1);
export const sineAngle = (x: number = 0): number => Math.asin(x);
export const cosineAngle = (x: number = 0): number => Math.acos(x);
export const tangentAngle = (x: number = 0): number => Math.atan(x);
export const hyperbolicSine = (x: number = 0): number => Math.sinh(x);
export const hyperbolicCosine = (x: number = 0): number => Math.cosh(x);
export const hyperbolicTangent = (x: number = 0): number => Math.tanh(x);
export const angleOfHyperbolicSine = (x: number = 0): number => Math.asinh(x);
export const angleOfHyperbolicCosine = (x: number = 0): number => Math.acosh(x);
export const angleOfHyperbolicTangent = (x: number = 0): number => Math.atanh(x);
export const sineForAddedAngles = (θ1: number = 0, θ2: number = 0): number =>
  sineForUnitedAngles(false, θ1, θ2);
export const sineForSubtractedAngles = (θ1: number = 0, θ2: number = 0): number =>
  sineForUnitedAngles(true, θ1, θ2);
export const cosineForAddedAngles = (θ1: number = 0, θ2: number = 0): number =>
  cosineForUnitedAngles(false, θ1, θ2);
export const cosineForSubtractedAngles = (θ1: number = 0, θ2: number = 0): number =>
  cosineForUnitedAngles(true, θ1, θ2);
export const tangentForAddedAngles = (θ1: number = 0, θ2: number = 0): number =>
  tangentForUnitedAngles(false, θ1, θ2);
export const tangentForSubtractedAngles = (θ1: number = 0, θ2: number = 0): number =>
  tangentForUnitedAngles(true, θ1, θ2);
export const pointOfTangentAngle = (x: number = 0, y: number = 0): number => Math.atan2(x, y);
export const hypotenuse = (l1: number = 0, l2: number = 0): number => Math.hypot(l1, l2);
export function triangleLegs(l1: number = 0, l2: number = 0): [number, number] {
  const hyp = Math.hypot(l1, l2);
  return [Math.sqrt(hyp ** 2 - l2 ** 2), Math.sqrt(hyp ** 2 - l1 ** 2)];
}
export const lawOfSines = (l1: number = 0, θ1: number = 0, θ2: number = 0): number =>
  l1 * (Math.sin(θ1) / Math.sin(θ2));
export const lawOfCosines = (a: number, b: number, γ: number): number =>
  a ** 2 + b ** 2 - 2 * a * b * Math.cos(γ);
export const sineForUnitedAngles = (
  subtract: boolean = false,
  θ1: number = 0,
  θ2: number = 0,
): number => {
  const op = subtract ? 1 : -1;
  return Math.sin(θ1) * Math.cos(θ2) + op * Math.cos(θ1) * Math.sin(θ2);
};
export const cosineForUnitedAngles = (
  subtract: boolean = false,
  θ1: number = 0,
  θ2: number = 0,
): number => Math.cos(θ1) * Math.cos(θ2) + (subtract ? -1 : 1) * Math.sin(θ1) * Math.sin(θ2);
export function tangentForUnitedAngles(
  subtract: boolean = false,
  θ1: number = 0,
  θ2: number = 0,
): number {
  const op = subtract ? 1 : -1;
  return (Math.tan(θ1) + op * Math.tan(θ2)) / (1 * op - Math.tan(θ1) * Math.tan(θ2));
}

export class Trigonometry {
  static sec(A: number): number {
    return 1 / Math.cos(A);
  }
  static csc(A: number): number {
    return 1 / Math.sin(A);
  }
  static cotan(A: number): number {
    return 1 / Math.tan(A);
  }
  static cofuncSin(A: number): number {
    return Math.cos(Math.PI / 2 - A);
  }
  static cofuncCos(A: number): number {
    return Math.sin(Math.PI / 2 - A);
  }
  static cofuncTan(A: number): number {
    return this.cotan(Math.PI / 2 - A);
  }
  static cofuncSec(A: number): number {
    return this.csc(Math.PI / 2 - A);
  }
  static cofuncCsc(A: number): number {
    return this.sec(Math.PI / 2 - A);
  }
  static cofuncCotan(A: number): number {
    return Math.tan(Math.PI / 2 - A);
  }
  static inverseAngSin(A: number): number {
    return -Math.sin(A);
  }
  static inverseAngCsc(A: number): number {
    return -this.csc(A);
  }
  static inverseAngCos(A: number): number {
    return -Math.cos(A);
  }
  static inverseAngSec(A: number): number {
    return -this.sec(A);
  }
  static inverseAngTan(A: number): number {
    return -Math.tan(A);
  }
  static inverseAngCotan(A: number): number {
    return -this.cotan(A);
  }
  static pythagorSin(A: number): number {
    return Math.sqrt(1 - Math.cos(A) ** 2);
  }
  static pythagorCos(A: number): number {
    return Math.sqrt(1 - Math.sin(A) ** 2);
  }
  static pythagorSec(ang: number): number {
    return Math.sqrt(Math.abs(Math.tan(ang) ** 2 - 1));
  }
  static pythagorCsc(ang: number): number {
    return Math.sqrt(Math.abs(1 / Math.tan(ang) ** 2 - 1));
  }
  static lawSin(b: number, A: number, B: number): number {
    return (b * Math.sin(A)) / Math.sin(B);
  }
  static lawCos(a: number, b: number, C: number): number {
    return a ** 2 + b ** 2 - 2 * a * b * Math.cos(C);
  }
  static lawTan(a: number, b: number, A: number, B: number): number {
    return a + b * (Math.tan(Math.abs((A - B) / 2)) / Math.tan(Math.abs(A + B / 2))) + b;
  }
  static halfAngSin(ang: number): number {
    return Math.sign(Math.sin(ang)) * Math.sqrt((1 - Math.cos(ang)) / 2);
  }
  static halfAngCos(ang: number): number {
    return Math.sign(Math.cos(ang)) * Math.sqrt((1 + Math.cos(ang)) / 2);
  }
  static halfAngTan(ang: number): number {
    return (
      Math.sign(Math.sin(ang)) *
      Math.sign(Math.cos(ang)) *
      Math.sqrt((1 - Math.cos(ang)) / (1 + Math.cos(ang)))
    );
  }
  static doubleAngSin(ang: number): number {
    return 2 * Math.sin(ang) * Math.cos(ang);
  }
  static doubleAngCos(ang: number): number {
    return Math.cos(ang) ** 2 - Math.sin(ang) ** 2;
  }
  static doubleAngTan(ang: number): number {
    return (2 * Math.tan(ang)) / (1 - Math.tan(ang) ** 2);
  }
  static tripleAngSin(ang: number): number {
    return 3 * Math.sin(ang) - 4 * Math.sin(ang) ** 3;
  }
  static tripleAngCos(ang: number): number {
    return 4 * Math.sin(ang) - 3 * Math.cos(ang);
  }
  static tripleAngTan(ang: number): number {
    return (3 * Math.tan(ang) - Math.tan(ang) ** 3) / (1 - 3 * Math.tan(ang) ** 2);
  }
  static addAnglesSin(angA: number, angB: number, subt: boolean = false): number {
    let op = 1;
    if (subt === true) op = -1;
    return Math.sin(angA) * Math.cos(angB) + op * Math.cos(angA) * Math.sin(angB);
  }
  static addAnglesCos(angA: number, angB: number, subt: boolean = true): number {
    let op = -1;
    if (subt === false) op = 1;
    return Math.cos(angA) * Math.cos(angB) + op * Math.sin(angA) * Math.sin(angB);
  }
  static addAnglesTan(A: number, B: number, subt: boolean = false) {
    let op = 1;
    if (subt === true) op = -1;
    return (Math.tan(A) + op * Math.tan(B)) / (1 - Math.tan(A) * Math.tan(B) * op);
  }
}
