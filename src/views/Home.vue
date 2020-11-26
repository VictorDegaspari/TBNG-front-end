<template>
  <div class="home">
    <Container>
      <Members texto="Membro 1" />
      <Members texto="Membro 2" />
      <Members texto="Membro 3" />
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";

export default {
  components: {
    Members,
    Container
  }
};
</script>
<style scoped></style>>
