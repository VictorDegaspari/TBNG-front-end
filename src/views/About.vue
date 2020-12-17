<template id="about-page">
  <div class="about">
    <Titles msg="Sobre"
      ><img id="icon-platform" src="../assets/PlayStation_logo.svg" alt="" />
      <Container :style="'display: block'">
        <p>
          Somos um time que surgiu no Playstation 4, mais precisamente em
          Piracicaba, São Paulo, atuamos desde 2016 levando muita risada e caos
          por onde o clã passa, já passaram muitos membros pelo Time Benga e
          hoje contamos com 7 membros, mas sempre cabe mais um na família então
          cola com nóis que é sucesso.
        </p>
        <select v-model="choice">
          <option value="jogo">Jogos</option>
          <option value="curiosidade">Curiosidades</option>
        </select>
      </Container>
    </Titles>
  </div>
</template>
<script>
// @ is an alias to /src
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";

export default {
  components: {
    Container,
    Titles
  }
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  position: relative;
  padding-bottom: 40px;
  text-align: center;
}
#icon-platform {
  max-width: 120.7px;
  max-height: 120.7px;
  margin: 10px;
}
</style>
