<template>
  <div class="card">
    <slot />
    <div class="card-body">
      <p class="card-text">{{ texto }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    texto: String
  }
};
</script>
<style scoped>
.card {
  width: 18rem;
}
</style>
