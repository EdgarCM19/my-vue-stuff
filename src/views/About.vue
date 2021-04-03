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
  <Button 
    :text="'Borrar'"
    :onClickFunction=" () => console.log('Jejeje')"
    :icon="'delete'"
    :size="24"
    :color="'#E55B5B'"
    :expand="false"
  />
  <hr style="background-color: gray; width: 80%;">
  <InputNumber 
    :max="12"
    :min="min"
    :value="numb"
    v-model="numb"
  />
  <hr style="background-color: gray; width: 80%;">
  <ProcessCard></ProcessCard>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import Toggle from '@/components/Toggle/Toggle.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';
import Button from '@/components/Button/Button.vue';
import InputNumber from '@/components/InputNumber/InputNumber.vue';
import ProcessCard from '@/components/ProcessCard/ProcessCard.vue';

export default defineComponent({
  components: {
    Toggle,
    Dropdown,
    Button,
    InputNumber,
    ProcessCard,

  },
  setup() {
    const store = inject('store') as any;
    const algo = ref(false);
    const min = 1;
    function changeTheme() {
      store.methods.toggleTheme();
    }

    const numb = ref(7);

    const iterable = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    const pid = ref('');

    return { 
      algo, 
      store,
      changeTheme,
      iterable,
      pid,
      numb,
      min
    };
  },
})
</script>

