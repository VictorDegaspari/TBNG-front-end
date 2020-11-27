<template>
  <div class="home">
    <Container>
      <Carousel />
    </Container>
  </div>
</template>
<script>
import Carousel from "@/components/Vcarousel.vue";
import Container from "@/components/Vcontainers.vue";

export default {
  components: {
    Carousel,
    Container
  }
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
</style>
