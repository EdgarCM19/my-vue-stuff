<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Toggle :value="algo" v-model="algo" :function="changeTheme"></Toggle>
  <Dropdown 
    :iterable="iterable"
    :placeholder="'PID'"
    :selected="pid"
    v-model="pid"
  />
  <div>holis</div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import Toggle from '@/components/Toggle/Toggle.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';

export default defineComponent({
  components: {
    Toggle,
    Dropdown,
  },
  setup() {
    const store = inject('store') as any;
    const algo = ref(false);
    function changeTheme() {
      store.methods.toggleTheme();
    }

    const iterable = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    const pid = ref('');

    return { 
      algo, 
      store,
      changeTheme,
      iterable,
      pid,
    };
  },
})
</script>

