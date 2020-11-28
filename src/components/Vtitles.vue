<template>
  <div class="titles container" :style="'margin:'">
    <h4>{{ msg }}</h4>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    margin: {
      type: Array,
      default: function() {
        return ["40", "24", "0", "24"];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.titles {
  border: 8px 8px 0px 0px;
  margin-top: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: linear-gradient(125.86deg, #1b76e8 5.96%, #7f9cf5 96.59%);
  max-width: 1140px;
  mix-blend-mode: normal;
  padding-bottom: 55px;
  /* x */

  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
h4 {
  margin-bottom: 10px;
  max-width: 1140px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 9px rgba(0, 0, 0, 0.808),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  color: white;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
</style>
