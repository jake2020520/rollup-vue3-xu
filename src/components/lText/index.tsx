import { defineComponent, h, resolveComponent } from "vue";

import {
  transformToComponentProps,
  textComponentProps,
  textStylePropNames,
} from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";

const defaultProps = transformToComponentProps(textComponentProps);

export default defineComponent({
  name: "mook-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps,
  },
  setup(props) {
    // pick({key:1,name:'text'},['key']) 取出 后面数组 对应属性
    // const styleProps = computed(() => pick(props, textStylePropNames));
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    );

    return () => {
      return (
        <div>
          {h(
            resolveComponent(props.tag),
            {
              style: { ...styleProps.value },
              onClick: handleClick,
              class: "l-text-component",
            },
            { default: () => props.text } as any
          )}
        </div>
      );
    };
  },
});
