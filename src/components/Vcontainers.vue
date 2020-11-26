<template>
  <div class="container"><slot /></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 20px;
  padding: 10px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.274),
    0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}
</style>
