<template>
  <div class="members">
    <Titles msg="Maiores elos Rainbow Six"
      ><img id="icon-member" src="../assets/trofeu.svg" alt="" />
      <Container>
        <Members texto="Victor Degaspari - season 6">
          <img src="../assets/plat.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Renato Rodrigues - season 6"
          ><img src="../assets/plat2.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Raphael Gomes - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Caio Domarco - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
        /></Members>
      </Container>
      <Container>
        <Members texto="Leo Moretti - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Caio Di Bene - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Felipe Trevisan - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
        /></Members>
        <Members texto="Matheus Cazelato - season 6"
          ><img src="../assets/gold1.svg" class="card-img-top" alt="..."
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
