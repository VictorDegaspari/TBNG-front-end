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
  color: #ffffff;
  border: 8px 8px 0px 0px;
  margin-top: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 85px;
}
h4 {
  background: rgb(98, 147, 252);
  margin-bottom: 0px;
  max-width: 1140px;
}
@media (max-width: 998px) {
  .titles {
    margin-left: 85px;
    margin-right: 85px;
  }
}
</style>
