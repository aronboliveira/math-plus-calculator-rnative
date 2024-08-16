export const circleArea = (r: number = 0): number => Math.PI * r ** 2;
export const circlePerimeter = (r: number = 0): number => 2 * Math.PI * r;
export const sphereArea = (r: number = 0): number => 4 * Math.PI * r ** 2;
export const sphereVolume = (r: number = 0): number => (4 / 3) * Math.PI * r ** 3;
export const cubeArea = (s: number = 0): number => 6 * s ** 2;
export const cubeVolume = (s: number = 0): number => s ** 3;
export const triangularPyramidArea = (s: number = 0): number => Math.sqrt(3) * s ** 2;
export const triangularPyramidVolume = (s: number = 0): number => (Math.sqrt(2) / 12) * s ** 3;
export const circleSectorArea = (r: number = 0, θ: number = 0): number =>
  Math.PI * r ** 2 * (θ / 360);
export const circleSectorLength = (r: number = 0, θ: number = 0): number =>
  2 * Math.PI * r * (θ / 360);
export const circleRing = (R: number = 0, r: number = 0): number => Math.PI * (R ** 2 - r ** 2);
export const torusArea = (R: number = 0, r: number = 0): number =>
  2 * Math.PI * R * (2 * Math.PI * r);
export const torusVolume = (R: number = 0, r: number = 0): number =>
  Math.PI * r ** 2 * (2 * Math.PI * R);
export const torusMajorRadius = (v: number = 0, r: number = 0): number =>
  (v * ((1 / Math.PI) * r) ** 2) / 2;
export const triangleArea = (b: number = 0, h: number = 0): number => (b * h) / 2;
export const parallelogramArea = (b: number = 0, h: number = 0): number => b * h;
export const parallelogramPerimeter = (s1: number = 0, s2: number = 0): number => 2 * (s1 + s2);
export const rectangleArea = (s1: number = 0, s2: number = 0): number => s1 * s2;
export const rectanglePerimeter = (s1: number = 0, s2: number = 0): number => 2 * (s1 + s2);
export const ellipsisArea = (ax1: number = 0, ax2: number = 0): number => Math.PI * ax1 * ax2;
export const ellipsisPerimeter = (ax1: number = 0, ax2: number = 0): number =>
  Math.PI *
  (ax1 + ax2) *
  (1 +
    (3 * (ax1 - ax2) ** 2) /
      ((ax1 + ax2) ** 2 + Math.sqrt(4 - (3 * (ax1 - ax2) ** 2) / (ax1 + ax2) ** 2)));
export const squarePyramidArea = (s: number = 0, h: number = 0): number =>
  s * (s + Math.sqrt(s ** 2 + 4 * h ** 2));
export const squarePyramidVolume = (s: number = 0, h: number = 0): number => (1 / 3) * s ** 2 * h;
export const coneArea = (r: number = 0, h: number = 0): number =>
  Math.PI * r * Math.sqrt(r ** 2 + h ** 2) + Math.PI * r ** 2;
export const coneVolume = (r: number = 0, h: number = 0): number => (1 / 3) * Math.PI * r ** 2 * h;
export const prismVolume = (a: number = 0, h: number = 0): number => a * h;
export const trianglePerimeter = (s1: number = 0, s2: number = 0, s3: number = 0): number =>
  s1 + s2 + s3;
export const trapezoidArea = (s1: number = 0, s2: number = 0, h: number = 0): number =>
  ((s1 + s2) / 2) * h;
export const coneOfFrustumArea = (r: number = 0, R: number = 0, s: number = 0): number =>
  Math.PI * s * (R + r) + Math.PI * r ** 2 + Math.PI * R ** 2;
export const coneOfFrustumVolume = (r: number = 0, R: number = 0, h: number = 0): number =>
  (Math.PI / 3) * (r ** 2 + r * R + R ** 2) * h;
export const cuboidArea = (w: number = 0, h: number = 0, l: number = 0): number =>
  2 * (l * w + l * h + w * h);
export const cuboidVolume = (w: number = 0, h: number = 0, l: number = 0): number => l * w * h;
export const prismArea = (a: number = 0, p: number = 0, h: number = 0): number => 2 * a + p * h;
export const trapezoidPerimeter = (s1: number, s2: number, s3: number, s4: number): number =>
  s1 + s2 + s3 + s4;

export class Geometry2D {
  static triangleArea(b: number = 0, h: number = 0): number {
    return (b * h) / 2;
  }
  static trianglePr(a: number = 0, b: number = 0, c: number = 0): number {
    return a + b + c;
  }
  static rectArea(b: number = 0, h: number = 0): number {
    return b * h;
  }
  static rectPr(a: number = 0, b: number = 0): number {
    return 2 * a + 2 * b;
  }
  static trapezoidArea(a: number = 0, b: number = 0, h: number = 0): number {
    return ((a + b) / 2) * h;
  }
  static trapezoidPr(a: number = 0, b: number = 0, c: number = 0, d: number = 0): number {
    return a + b + c + d;
  }
  static parallelogramArea(b: number = 0, h: number = 0): number {
    return b * h;
  }
  static parallelogramPr(a: number = 0, b: number = 0): number {
    return 2 * (a + b);
  }
  static ellipsisArea(a: number = 0, b: number = 0): number {
    return Math.PI * a * b;
  }
  static ellipsisPr(a: number = 0, b: number = 0): number {
    const h = (a - b) ** 2 / (a + b) ** 2;
    return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
  static circlePr(r: number = 0): number {
    return 2 * Math.PI * r;
  }
  static circleRing(R: number = 0, r: number = 0): number {
    return Math.PI * (R ** 2 - r ** 2);
  }
  static circleSectorArea(r: number = 0, ang: number = 0): number {
    return Math.PI * r ** 2 * (ang / 360);
  }
  static circleSectorLength(r: number = 0, ang: number = 0): number {
    return Math.PI * r * (ang / 180);
  }
}

export class Geometry3D {
  static sphereVolume(r: number = 0): number {
    return 1.33333 * Math.PI * r ** 2;
  }
  static sphereArea(r: number = 0): number {
    return 4 ** (Math.PI ** (r ** 2));
  }
  static cubeVolume(s: number = 0): number {
    return s ** 3;
  }
  static cubeArea(s: number = 0): number {
    return 6 * s ** 2;
  }
  static prismVolume(a: number = 0, h: number = 0): number {
    return a * h;
  }
  static prismArea(s: number = 0, p: number = 0, h: number = 0): number {
    return 2 * s + h * p;
  }
  static trPrismVolumeByArea(l: number = 0, a: number = 0): number {
    return a * l;
  }
  static trPrismVolumeByWidth(w: number, h: number, l: number, s: number): number {
    return w * h + 2 * l * s + l * w;
  }
  static rectVolume(w: number = 0, h: number = 0, l: number = 0): number {
    return l * w * h;
  }
  static rectArea(w: number = 0, h: number = 0, l: number = 0): number {
    return 2 * l * w + 2 * l * h + 2 * w * h;
  }
  static circCylVolume(r: number = 0, h: number = 0): number {
    return Math.PI * r ** 2 * h;
  }
  static circCylArea(r: number = 0, h: number = 0): number {
    return 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;
  }
  static pyrVolume(s: number = 0, h: number = 0): number {
    return 0.333 * s * h;
  }
  static sqrPyrVolume(s: number = 0, h: number = 0): number {
    return 0.333 * s ** 2 * h;
  }
  static sqrPyrArea(s: number = 0, h: number = 0): number {
    return s * (s + Math.sqrt(s ** 2 + 4 * h ** 2));
  }
  static trPyrVolume(s: number = 0): number {
    return Math.sqrt(2) * (s ** 3 * (1 / 6));
  }
  static trPyrArea(s: number = 0): number {
    return Math.sqrt(3) * s ** 2;
  }
  static circConeVolume(r: number = 0, h: number = 0): number {
    return 0.333 * Math.PI * r ** 2 * h;
  }
  static circConeArea(r: number = 0, h: number = 0): number {
    return Math.PI * r * Math.sqrt(r ** 2 + h ** 2) + Math.PI * r ** 2;
  }
  static frustConeVolume(r: number = 0, R: number = 0, h: number = 0): number {
    return (Math.PI / 3) * (r ** 2 + r * R + R ** 2) * h;
  }
  static frustConeArea(r: number = 0, R: number = 0, s: number = 0): number {
    return Math.PI * s * (R + r) + Math.PI * r ** 2 + Math.PI * R ** 2;
  }
  static torusVolume(r: number = 0, R: number = 0): number {
    return 2 * Math.PI ** 2 * r ** 2 * R;
  }
  static torusArea(r: number = 0, R: number = 0): number {
    return 4 * Math.PI ** 2 * r * R;
  }
}
