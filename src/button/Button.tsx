import { defineComponent, h, PropType } from 'vue'
import 'uno.css'

export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export type Iicon =
  | 'search'
  | 'edit'
  | 'check'
  | 'message'
  | 'star-off'
  | 'delete'
  | 'add'
  | 'share'
export default defineComponent({
  name: 'HButton',
  props: {
    color: {
      type: String as PropType<IColor>,
      default: 'blue',
    },
    icon: {
      type: String as PropType<Iicon>,
    },
  },
  setup(props, { slots }) {
    return () => (
      <button
        class={`py-2 px-4 font-semibold rounded shadow-md text-white bg-${props.color}-500
        hover:bg-${props.color}-700 border-none cursor-pointer transition-all`}>
        {props.icon && <i class={`i-ic-baseline-${props.icon} p-2`}></i>}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
