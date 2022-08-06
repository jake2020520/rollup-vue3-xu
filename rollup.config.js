import resolve from "@rollup/plugin-node-resolve"; // 第三方模块，需要打包到项目里，就用这个
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
// import serve from "rollup-plugin-serve";
import babel from "@rollup/plugin-babel";
import jsx from "acorn-jsx"; //acorn-jsx是rollup官方推荐的JSX解析器将源代码解析到JSX AST。
// import path from "path";
import postcss from "rollup-plugin-postcss"; //对css预处理文件进行解析处理 less,scss
import postcssUrl from "postcss-url";
import cssnano from "cssnano"; // cssnano — 压缩，减小输出CSS文件大小
import commonjs from "@rollup/plugin-commonjs"; //将CommonJS模块转换为ES6, 方便rollup直接调用
import json from "@rollup/plugin-json"; // 可以使用json
import { name } from "./package.json";

const overrides = {
  compilerOptions: {
    declaration: true, // 给文件生成 d.ts
  },
  // include: ["src/main.ts"], //具体要那个文件生成 d.ts
  exclude: ["src/main.ts"], /// 排出的文件
};
const file = (type) => `dist/${name}.${type}.js`;
const extensions = [".ts", ".js", ".tsx"];

export { file, name };
export default {
  input: "src/main.ts", //入口
  plugins: [
    vue(),
    typescript({
      // tsconfig: path.resolve(__dirname, "tsconfig.json"),
      tsconfigOverride: overrides, // 重置 属性，覆盖前面设置的
    }),
    // 我们编写的源码与  依赖的第三方库进行合并 @rollup/plugin-node-resolve
    resolve({ mainFields: ["module", "main", "browser"] }),
    commonjs({ extensions, sourceMap: true }),
    babel({ runtimeHelpers: true, exclude: "**/node_modules/**" }),
    postcss({
      plugins: [
        cssnano,
        // postcssUrl({
        //   url: "inline", // enable inline assets using base64 encoding
        //   maxSize: 10, // maximum file size to inline (in kilobytes)
        //   fallback: "copy", // fallback method to use if max size is exceeded
        //   to: "dist/style.css",
        // }),
      ],
      extract: "style.css", // 输出路径
    }),
    json(),
    // serve({
    //   port: 3002,
    //   contentBase: "", // 表示起的服务是在根目录下
    //   openPage: "/public/index.html", // 打开的是哪个文件
    //   open: true, // 默认打开浏览器
    // }),
  ],
  external: ["vue", "lodash-es"], // 告知rollup 哪些是外部的类库,不需要打包
  acornInjectPlugins: [jsx()],
};
