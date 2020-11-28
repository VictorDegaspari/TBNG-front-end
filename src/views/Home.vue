<template>
  <div class="home">
    <Titles msg="Time Benga">
      <Container>
        <Carousel />
      </Container>
      <div id="whatsapp">
        <a href="https://chat.whatsapp.com/HoMaJ9QEMVV28RJWFJcHOY">
          <img src="../assets/whatsapp.svg" alt="" />
        </a>
      </div>
    </Titles>
  </div>
</template>
<script>
import Carousel from "@/components/Vcarousel.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";

export default {
  components: {
    Carousel,
    Container,
    Titles
  }
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
#whatsapp {
  position: fixed;
  right: 15px;
  width: 40px;
  bottom: 60px;
}
</style>
