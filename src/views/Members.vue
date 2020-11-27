<template>
  <div class="members">
    <h2>Membros</h2>
    <!-- <Titles msg="Membros" :margin="[10]" /> -->
    <Container>
      <Members texto="Victor Degaspari">
        <img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Renato Rodrigues"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Raphael Gomes"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Caio Domarco"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
    </Container>
    <Container>
      <Members texto="Leo Moretti"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Caio Di Bene"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Felipe Trevisan"
        ><img src="../assets/insta.svg" class="card-img-top" alt="..."
      /></Members>
      <Members texto="Matheus Cazelato"
        ><img
          src="../assets/insta.svg"
          class="card-img-top"
          alt="..."
        />></Members
      >
    </Container>
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
// import Titles from "@/components/Vtitles.vue";

export default {
  components: {
    Members,
    Container
    // Titles,
  }
};
</script>

<style lang="scss" scoped>
.members {
  height: 100%;
  padding-bottom: 60px;
}
h2 {
  color: #ffffff;
  text-align: center;
}
</style>
