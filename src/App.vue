<template>
  <div id="app">
    <Menu class="fixed-top" />
    <Footer />
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from "@/components/Vmenu.vue";
import Footer from "@/components/Vfooter.vue";

export default {
  components: {
    Menu,
    Footer
  },
  data() {
    return { isLoading: false };
  }
};
</script>
<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2c3e50;
  /* width: 100%; */
  height: 100%;
  margin: 0;
  padding-top: 5rem;
  position: relative;
}
.fixed-top {
  z-index: 9999;
}
.menu-topo {
  margin-top: 20px;
}
h1 {
  font-weight: 500;

  font-size: 14px;
  line-height: 22px;
  margin: 0;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(to right, rgb(0, 26, 110), rgb(35, 105, 255));
}
</style>
