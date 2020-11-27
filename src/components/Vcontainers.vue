<template>
  <div class="container" :style="'display:'"><slot /></div>
</template>
<script>
export default {
  display: {
    default: function() {
      return ["flex"];
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.274),
    0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
}
@media (max-width: 998px) {
  .container {
    display: block;
    justify-items: center;
    align-self: center;
    width: fit-content;
  }
}
</style>
