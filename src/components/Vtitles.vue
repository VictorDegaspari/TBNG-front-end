<template>
  <div class="titles" :style="'margin:'">
    <h4>{{ msg }}</h4>
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
  background: rgb(98, 147, 252);
  color: #ffffff;
  padding-left: 10px;
  border: 8px 8px 0px 0px;
  margin-top: 20px;
}
h4 {
  margin: 0;
}
</style>
