import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import babel from "@rollup/plugin-babel";
import jsx from "acorn-jsx"; //acorn-jsx是rollup官方推荐的JSX解析器将源代码解析到JSX AST。
import path from "path";
import postcss from "rollup-plugin-postcss"; //对css预处理文件进行解析处理 less,scss
import cssnano from "cssnano";
import commonjs from "@rollup/plugin-commonjs"; //将CommonJS模块转换为ES6, 方便rollup直接调用
const extensions = [".ts", ".js", ".tsx"];
export default {
  input: "src/main.ts", //入口
  output: {
    //出口
    file: "dist/bundle.js", //文件路径
    format: "es", //输出格式
    name: "editorName",
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
    // 这个插件是有执行顺序的
    resolve({ mainFields: ["module", "main", "browser"] }),
    commonjs({ extensions, sourceMap: true }),
    babel({ babelHelpers: "bundled", exclude: "**/node_modules/**" }),
    postcss({
      plugins: [cssnano],
      extract: "style.css", // 输出路径
    }),
    serve({
      port: 3002,
      contentBase: "", // 表示起的服务是在根目录下
      openPage: "/public/index.html", // 打开的是哪个文件
      open: true, // 默认打开浏览器
    }),
  ],
  watch: {
    exclude: "node_modules/**",
  },
  acornInjectPlugins: [jsx()],
};
