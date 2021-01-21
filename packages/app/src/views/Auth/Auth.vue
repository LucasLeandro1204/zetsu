<script>
import { computed, defineComponent, reactive, shallowReactive } from 'vue';
import { user } from '../User/User.vue';

export const auth = shallowReactive({
  checked: true,
  authenticated: true,
  token: 'somerandomtoken',
});

export const Authenticate = () => {

};

export default defineComponent({

});
</script>
