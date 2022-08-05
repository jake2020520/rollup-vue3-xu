import { App, createApp } from "vue";
// import App from "./App";
import LText from "./components/lText/lText";
import ColorPicker from "./components/colorPicker/colorPicker";
const components = [LText, ColorPicker];

const instance = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, ColorPicker, instance };

export default { instance };

// createApp(App).mount("#app");
