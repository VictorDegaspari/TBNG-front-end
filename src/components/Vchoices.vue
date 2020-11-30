<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <component v-bind:is="component" />
    <button v-on:click="toggle">Toggle</button>
  </div>
</template>
<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
export default {
  name: "app",
  components: {
    Test,
    Test2
  },
  data() {
    return {
      component: "Test2"
    };
  },
  methods: {
    toggle() {
      if (this.component === Test) {
        this.component = Test2;
      } else {
        this.component = Test;
      }
    }
  }
};
</script>
