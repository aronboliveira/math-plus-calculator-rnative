module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // presets: [
    //   [
    //     "@babel/present-env",
    //     { coreJs: 3, useBuiltIns: "usage", targets: { browsers: ["> 0.25%", "not dead"] } },
    //   ],
    // ],
    // plugins: [["@babel/plugin-transform-runtime", { regenerator: true }]],
  };
};
