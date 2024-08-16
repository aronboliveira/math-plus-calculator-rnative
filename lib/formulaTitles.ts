import {
  AlgebraFormulaNamesReg,
  CombinationsTypesReg,
  GeometryFormulaNamesReg,
  ProbabilityFormulaNamesReg,
  StatisticsFormulaNamesReg,
  TrigonometryFormulaNamesReg,
} from "./declarations/types";

export const titlesAlgebra = [
  "Linear Formula",
  "Discriminant",
  "Number of Roots",
  "Quadratic Formula",
  "Cubic Formula",
  "Difference of Squares",
  "Least Common Multiple",
  "Greatest Common Divisor",
  "Common Difference of Arithmetic Series",
  "Reason for Geometric Series",
  "Nth term of Arithmetic Series",
  "Sum of Arithmetic Series",
  "Nth Term of Geometric Series",
  "Sum of Geometric Series",
  "Binomial Theorem",
] as AlgebraFormulaNamesReg[];
export const lengTitlesAlgebra = {
  linearFormula: 2, //a, b
  differenceOfSquares: 2, //a, b
  nthTermOfArithmeticSeries: 2, //ini, length
  reasonForGeometricSeries: 2, //a ** n -1, a ** n
  discriminant: 3, // a, b, c
  quadraticFormula: 3, // a, b, c
  sumOfArithmeticSeries: 3, // a1, an, length
  commonDifferenceOfArithmeticSeries: 3, // a1, an, length
  nthTermOfGeometricSeries: 3, //a1, an, length
  sumOfGeometricSeries: 4, // a1, an, length, infinite
  binomialTheorem: 4, //a, b, n, subtr
  cubicFormula: 5, //a, b, c, d, x
  leastCommonMultiple: Infinity,
  greatestCommonDivisor: Infinity,
};
export const inpTitlesAlgebra = [
  ["number"],
  ["number", "number"],
  ["list", "object"],
  ["list", "number"],
  ["number", "number", "number"],
  ["number", "number", "number", "number", "number"],
];
export const titlesCombinatorics = [
  "Permutation without Repetition",
  "Circular Permutation",
  "Multiset Permutation",
  "Distinct Permutation without Repetition",
  "Distinct Permutation with Repetition",
  "Combination without Repetition",
  "Combination with Repetition",
] as CombinationsTypesReg[];
export const lengTitlesCombinatorics = {
  permutation: 5,
  multisetPermutation: 2,
};
export const inpTitlesCombinatorics = [["number"], ["number", "number"], ["number", "list"]];
export const titlesStatistics = [
  "Arithmetic Mean",
  "Harmonic Mean",
  "Geometric Mean",
  "Median",
  "Mode",
  "Arithmetic Variance",
  "Geometric Variance",
  "Covariance",
  "Arithmetic Standard Deviation",
  "Geometric Standard Deviation",
  "Coefficient of Correlation",
  "Z-score",
  "Regression Line",
  "First Quartil",
  "First Quartil Index",
  "Second Quartil",
  "Second Quartil Index",
  "Third Quartil",
  "Third Quartil Index",
  "Fourth Quartil",
  "Fourth Quartil Index",
  "Interval between Quartils",
  "Upper Whisker",
  "Lower Whisker",
  "Lower Outliers",
  "Upper Outliers",
  "Pearson's Assymetry Index",
  "Person's Correlation Test",
  "Pearson's Test",
] as StatisticsFormulaNamesReg[];
export const lengTitlesStatistics = {
  arithmeticMean: Infinity,
  harmonicMean: Infinity,
  geometricMean: Infinity,
  median: Infinity,
  mode: Infinity,
  arithmeticVariance: Infinity,
  geometricVariance: Infinity,
  covariance: 2,
  arithmeticStandardDeviation: Infinity,
  geometricStandardDeviation: Infinity,
  coefficientOfVariation: Infinity,
  zScore: 1,
  regressionLine: Infinity,
  firstQuartil: Infinity,
  firstQuartilIndex: Infinity,
  secondQuartil: Infinity,
  secondQuartilIndex: Infinity,
  thirdQuartil: Infinity,
  thirdQuartilIndex: Infinity,
  fourthQuartil: Infinity,
  fourthQuartilIndex: Infinity,
  intervalBetweenQuartils: Infinity,
  upperWhisker: Infinity,
  lowerWhisker: Infinity,
  lowerOutliers: Infinity,
  upperOutliers: Infinity,
  pearsonsAsymmetryIndex: Infinity,
  pearsonsCorrelationTest: 1,
  pearsonsTest: 1,
};
export const inpTitlesStatistics = [
  ["number"],
  ["list"],
  ["list of objects"],
  ["number", "number"],
  ["number", "list"],
  ["list", "list"],
];
export const titlesProbability = [
  "Simple Probability",
  "Probability in a List",
  "Probability of Intersection of Independent Events",
  "Probability of Intersection of Dependent Events",
  "Probability of Union of Independent Events",
  "Probability of Union of Dependent Events",
  "Conditional Probability",
  "Bayes' Theorem",
  "Expected Value",
  // "Binomial Distribution",
  "Poisson Distribution",
] as ProbabilityFormulaNamesReg[];
export const lengTitlesProbability = {
  simpleProbability: 2,
  probabilityInAList: 2,
  poissonDistribution: 2,
  probabilityOfIntersectionOfIndependentEvents: 3,
  conditionalProbability: 3,
  probabilityOfUnionOfIndependentEvents: 3,
  probabilityOfIntersectionOfDependentEvents: 3,
  probabilityOfUnionOfDependentEvents: 3,
  bayesTheorem: 3,
  // binomialDistributionForDiscreteVariables: 3,
  // binomialDistributionForContinuousVariables: 3,
  expectedValue: Infinity,
};
export const inpTitlesProbability = [
  [],
  ["number of occurrences of event", "total number of events"], //needs to be switcheable to array of cells
  [
    "number of occurences of first event",
    "number of ocurrences of second event",
    "total number of events",
  ],
];
export const titlesTrigonometry = [
  "Sine",
  "Cosine",
  "Tangent",
  "Secant",
  "Cosecant",
  "Cotangent",
  "Sine Angle",
  "Cosine Angle",
  "Tangent Angle",
  "Hyperbolic Sine",
  "Hyperbolic Cosine",
  "Hyperbolic Tangent",
  "Angle Of Hyperbolic Sine",
  "Angle Of Hyperbolic Cosine",
  "Angle Of Hyperbolic Tangent",
  "Point Of Tangent Angle",
  "Hypotenuse",
  "Triangle Legs",
  "Sine As Cofunction",
  "Cosine As Cofunction",
  "Tangent As Cofunction",
  "Secant As Cofunction",
  "Cotangent As Cofunction",
  "Sine With Pythagorean Identity",
  "Cosine With Pythagorean Identity",
  "Tangent With Pythagorean Identity",
  "Secant With Pythagorean Identity",
  "Cotangent With Pythagorean Identity",
  "Cosecant With Pythagorean Identity",
  "Law Of Sines",
  "Law Of Cosines",
  "Halved Angled Sine",
  "Halved Angled Cosine",
  "Halved Angle Tangent",
  "Double Angled Sine",
  "Double Angled Cosine",
  "Double Angled Tangent",
  "Triple Angled Sine",
  "Triple Angled Cosine",
  "Triple Angled Tangent",
  "Sine For United Angles",
  "Sine For Added Angles",
  "Sine For Subtracted Angles",
  "Cosine For United Angles",
  "Cosine For Added Angles",
  "Cosine For Subtracted Angles",
  "Tangent For United Angles",
  "Tangent For Added Angles",
  "Tangent For Subtracted Angles",
] as TrigonometryFormulaNamesReg[];
export const lengTitlesTrigonometry = {
  sine: 1, //θ
  cosine: 1, //θ
  tangent: 1, //θ
  cosecant: 1, //θ
  secant: 1, //θ
  cotangent: 1, //θ
  halvedAngledSine: 1, //θ
  halvedAngledCosine: 1, //θ
  halvedAngleTangent: 1, //θ
  doubleAngledSine: 1, //θ
  doubleAngledCosine: 1, //θ
  doubleAngledTangent: 1, //θ
  tripleAngledSine: 1, //θ
  tripleAngledCosine: 1, //θ
  tripleAngledTangent: 1, //θ
  sineAsCofunction: 1, //θ
  cosineAsCofunction: 1, //θ
  tangentAsCofunction: 1, //θ
  cosecantAsCofunction: 1, //θ
  secantAsCofunction: 1, //θ
  cotangentAsCofunction: 1, //θ
  sineWithPythagoreanIdentity: 1, //θ
  cosineWithPythagoreanIdentity: 1, //θ
  tangentWithPythagoreanIdentity: 1, //θ
  secantWithPythagoreanIdentity: 1, //θ
  cotangentWithPythagoreanIdentity: 1, //θ
  cosecantWithPythagoreanIdentity: 1, //θ
  sineAngle: 1, //x
  cosineAngle: 1, //x
  tangentAngle: 1, //x
  hyperbolicSine: 1, //x
  hyperbolicCosine: 1, //x
  hyperbolicTangent: 1, //x
  angleOfHyperbolicSine: 1, //x
  angleOfHyperbolicCosine: 1, //x
  angleOfHyperbolicTangent: 1, //x
  pointOfTangentAngle: 2, //x, y
  sineForAddedAngles: 2, //θ1, θ2
  sineForSubtractedAngles: 2, //θ1, θ2
  cosineForAddedAngles: 2, //θ1, θ2
  cosineForSubtractedAngles: 2, //θ1, θ2
  tangentForAddedAngles: 2, //θ1, θ2
  tangentForSubtractedAngles: 2, //θ1, θ2
  triangleLegs: 2, //l1, l2
  hypotenuse: 2, //l1, l2
  lawOfSines: 3,
  lawOfCosines: 3,
  sineForUnitedAngles: 3, //sub, θ1, θ2
  cosineForUnitedAngles: 3, //sub, θ1, θ2
  tangentForUnitedAngles: 3, //sub, θ1, θ2
};
export const inpTitlesTrigonometry = [
  ["number"],
  ["number", "number"],
  ["number", "number", "number"],
];
export const titlesGeometry = [
  "Triangle Area",
  "Triangle Perimeter",
  "Rectangle Area",
  "Rectangle Perimeter",
  "Trapezoid Area",
  "Trapezoid Perimeter",
  "Parallelogram Area",
  "Parallelogram Perimeter",
  "Ellipsis Area",
  "Ellipsis Perimeter",
  "Circle Area",
  "Circle Perimeter",
  "Circle Ring",
  "Circle Sector Area",
  "Circle Sector Length",
  "Triangular Pyramid Area",
  "Triangular Pyramid Volume",
  "Square Pyramid Area",
  "Square Pyramid Volume",
  "Cone Area",
  "Cone Volume",
  "Cone of Frustum Area",
  "Cone of Frustum Volume",
  "Cuboid Area",
  "Cuboid Volume",
  "Cube Area",
  "Cube Volume",
  "Prism Area",
  "Prism Volume",
  "Sphere Area",
  "Sphere Volume",
  "Torus Area",
  "Torus Volume",
  "Torus Major Radius",
] as GeometryFormulaNamesReg[];
export const lengTitlesGeometry = {
  circleArea: 1, //r
  circlePerimeter: 1, //r
  sphereArea: 1, //r
  sphereVolume: 1, //r
  cubeArea: 1, //s
  cubeVolume: 1, //s
  triangularPyramidArea: 1, //s
  triangularPyramidVolume: 1, //s
  circleSectorArea: 2, //r, ang
  circleSectorLength: 2, //r, ang
  circleRing: 2, //r, R
  torusArea: 2, //r, R
  torusVolume: 2, //r, R
  torusMajorRadius: 2, //v, r
  triangleArea: 2, //b, h
  parallelogramArea: 2, //b, h
  parallelogramPerimeter: 2, //s1, s2
  rectangleArea: 2, //s1, s2
  rectanglePerimeter: 2, //s1, s2
  ellipsisArea: 2, //ax1, ax2
  ellipsisPerimeter: 2, //ax1, ax2
  squarePyramidArea: 2, //s, h
  squarePyramidVolume: 2, //s, h
  coneArea: 2, //r, h
  coneVolume: 2, //r, h
  prismVolume: 2, //a, h
  trianglePerimeter: 3, // s1, s2, s3
  trapezoidArea: 3, // s1, s2, s3
  coneOfFrustumArea: 3, // r, R, s
  coneOfFrustumVolume: 3, // r, R, h
  cuboidArea: 3, // w, h, l
  cuboidVolume: 3, // w, h, l
  prismArea: 3, // a, p, h
  trapezoidPerimeter: 4, //s1, s2, s3, s4
};
export const inpTitlesGeometry = [
  ["number"],
  ["number", "number"],
  ["number", "number", "number", "number"],
  ["number", "number", "number", "number"],
];
export const first50Primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
  197, 199, 211, 223, 227, 229,
];
