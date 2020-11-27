<template>
  <div class="members">
    <Titles msg="Membros"
      ><img id="icon-member" src="../assets/membros.svg" alt="" />
      <Container id="display-members">
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
          ><img src="../assets/insta.svg" class="card-img-top" alt="..."
        /></Members>
      </Container>
    </Titles>
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";

export default {
  components: {
    Members,
    Container,
    Titles
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
