import { App } from "vue";
import ColorPicker from "./index";

ColorPicker.install = (app: App) => {
  app.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker;
