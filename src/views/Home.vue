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
        width="73%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <b-img class="gif" :src="gif" />
    </Titles>
  </div>
</template>
<script>
import Carousel from "@/components/Vcarousel.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import gif from "@/assets/giphy.gif";

export default {
  components: {
    Carousel,
    Container,
    Titles
  },
  data() {
    return { gif: gif };
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
.gif {
  width: 73%;
  height: 10%;
  border-radius: 8px;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.205);
  margin-bottom: 10px;
}
</style>
