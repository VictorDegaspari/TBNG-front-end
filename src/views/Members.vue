<template>
  <div class="members">
    <h2>Membros</h2>
    <!-- <Titles msg="Membros" :margin="[10]" /> -->
    <Container>
      <Members texto="Victor Degaspari"></Members>
      <Members texto="Renato Rodrigues"></Members>
      <Members texto="Caio Domarco"></Members>
      <Members texto="Caio Di Bene"></Members>
    </Container>
    <Container>
      <Members texto="Leo Moretti"></Members>
      <Members texto="Felipe Trevisan"></Members>
      <Members texto="Raphael Gomes"></Members>
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
