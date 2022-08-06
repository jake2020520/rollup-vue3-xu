module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        // useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      },
    ],
    ["@babel/preset-typescript"],
  ],
  plugins: [["@vue/babel-plugin-jsx"]],
};
