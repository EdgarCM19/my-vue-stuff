<template>
  <div class="main" :class="{ dark : store.getters.getTheme() }">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import store from '@/store';

export default defineComponent({
  setup() {
    provide('store', store);
    const theme = false;
    return { 
      theme,
      store
    };
  },
})
</script>


<style lang="scss">
@import './styles/_app.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
