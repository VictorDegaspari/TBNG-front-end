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
      <iframe
        src="https://discord.com/widget?id=716347880079622186&theme=dark"
        width="325"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
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
  height: 100%;
}
#whatsapp {
  position: fixed;
  right: 15px;
  width: 40px;
  bottom: 60px;
}
</style>
