import basicConfig, { name, file } from "./rollup.config";

export default {
  ...basicConfig,
  output: {
    name,
    file: file("es"),
    format: "es",
    sourcemap: true,
  },
};
