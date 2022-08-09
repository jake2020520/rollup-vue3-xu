module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        // useBuiltIns: 'entry',
        corejs: 3,
        // 设置为false, 否则babel会在rollup有机会执行其操作之前导致我们的模块转化为commonjs
        modules: false,
      },
    ],
    ["@babel/preset-typescript"],
  ],
  plugins: [["@vue/babel-plugin-jsx"]],
};
