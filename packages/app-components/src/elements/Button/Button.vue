<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    /**
     * href attribute for a.
     */
    href: {
      type: String,
      required: false,
      default: null,
    },
  },

  emits: [
    'hover',
    'click',
    'focus',
  ],

  setup (props, { slots }) {
    return () => h(
      props.href
        ? 'a'
        : 'button',
      {},
      slots,
    );
  },
});
</script>

