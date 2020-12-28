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
        <b-button variant="outline-primary" @click="component= 'jogos'">Jogos</b-button>
        <b-button variant="outline-success" @click="component= 'curiosidades'">Curiosidades</b-button>
        <p></p>
       
        <component :is="component"></component>
        <p></p>
        <Container class="comments">
          <form @submit="submit"  method="post">
          <input  v-model="choices.description" />
          <b-button>Enviar</b-button>
          </form>
          <pre>
          <div v-for="choices in log" v-html="enr" :key="choices.description"></div>
          </pre>
        </Container>
      </Container>
    </Titles>
  </div>
</template>
<script>
// @ is an alias to /src
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import curiosidades from '@/components/Vcuriosidades.vue';
import jogos from '@/components/Vjogos.vue';

export default {
  components: {
    'jogos':jogos,
    'curiosidades':curiosidades,
    Container,
    Titles,
  },
  data: () => ({
    component:'jogos',
    choices: {
      description: "",
    },
    log: []
  }),
  methods: {
    submit($event) {
      this.log.push(`Save ${JSON.stringfy(this.choices)}`);
      $event.preventDefault();
    },
  },
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
.comments{
  color: black;
}
</style>
