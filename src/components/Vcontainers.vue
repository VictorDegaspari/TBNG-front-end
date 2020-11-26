<template>
  <div class="container"><slot /></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
  display: flex;
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
    background: #3091ff96;
    justify-items: center;
    align-self: center;
    width: fit-content;
  }
}
</style>
