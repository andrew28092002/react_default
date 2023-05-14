module.exports = {
  presets: [
    "@babel/react",
    "@babel/typescript",
    [
      "@babel/env",
      {
        modules: false,
        targets: {
          chrome: "58",
          ie: "11",
        },
      },
    ],
  ],
};
