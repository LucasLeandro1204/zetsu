<script>
import { computed, defineComponent, reactive, shallowReactive } from 'vue';
import { user } from '../User/User.vue';

export const auth = reactive({
  checked: true,
  authenticated: true,
  token: 'somerandomtoken',
});

export default defineComponent({

});
</script>
