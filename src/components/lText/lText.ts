import { App } from "vue";
import LText from "./index";

LText.install = (app: App) => {
  app.component(LText.name, LText);
};

export default LText;
