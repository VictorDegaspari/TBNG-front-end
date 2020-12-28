<template>
  <div class="members">
    <Titles msg="Membros"
      ><img id="icon-member" src="../assets/membros.svg" alt="" />
      <Container id="display-members">
        <Members texto="Victor Degaspari">
          <a href="https://www.instagram.com/victor.degaspari"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Renato Rodrigues">
          <a href="https://www.instagram.com/renato_schlichting/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Raphael Gomes">
          <a href="https://www.instagram.com/raphael_antoneli_gomes/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Caio Domarco">
          <a href="https://www.instagram.com/caio.sousa02/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
      </Container>
      <Container>
        <Members texto="Leo Moretti">
          <a href="https://www.instagram.com/leozmoretti/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Caio Di Bene">
          <a href="https://www.instagram.com/caiodibene10/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Felipe Trevisan">
          <a href="https://www.instagram.com/felipe_trevisan17/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
        <Members texto="Matheus Cazelato">
          <a href="https://www.instagram.com/len_ha_dor/"
            ><img @click="ativaSpinner" :src="img1" class="card-img-top"/></a
        ></Members>
      </Container>
    </Titles>
    <Spinner :isLoading="isLoading" />
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import Spinner from "@/components/Vspinner.vue";
import img1 from "@/assets/insta.svg";

export default {
  components: {
    Members,
    Container,
    Titles,
    Spinner
  },
  data: () => {
    return { isLoading: false, img1: img1 };
  },
  methods: {
    ativaSpinner() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    }
  }
};
</script>

<style lang="scss" scoped>
.members {
  height: 100%;
  padding-bottom: 40px;
  text-align: center;
}
#icon-member {
  max-width: 120.7px;
  max-height: 120.7px;
  margin: 10px;
}
</style>
