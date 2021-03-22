<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
  <Button :onClickFunction="algo">Holis jejejeje</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Button,
  },
  setup() {
    const algo = () => console.log('holiosiiis');
    return {
      algo,
    }
  }
});
</script>
