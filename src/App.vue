<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from "@/components/Vmenu.vue";

export default {
  components: {
    Menu
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2c3e50;
  width: 100vw;
  height: 100vh;
}
h1 {
  font-weight: 500;

  font-size: 14px;
  line-height: 22px;
  margin: 0;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(
    to right,
    rgba(0, 26, 110, 0.397),
    rgba(35, 105, 255, 0.493)
  );
}
</style>
