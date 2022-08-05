import {
  defineComponent,
  h,
  // reactive
} from "vue";

export default defineComponent({
  name: "App-tsx",
  setup() {
    return () => {
      return <div class="common-layout">我的项目</div>;
    };
  },
});
