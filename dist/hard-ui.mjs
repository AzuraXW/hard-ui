import { defineComponent, createVNode } from "vue";
const __uno = "";
const Button = defineComponent({
  name: "HButton",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    icon: {
      type: String
    }
  },
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `py-2 px-4 font-semibold rounded shadow-md text-white bg-${props.color}-500
        hover:bg-${props.color}-700 border-none cursor-pointer transition-all`
    }, [props.icon && createVNode("i", {
      "class": `i-ic-baseline-${props.icon} p-2`
    }, null), slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  entry as default
};
//# sourceMappingURL=hard-ui.mjs.map
