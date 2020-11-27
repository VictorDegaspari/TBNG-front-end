<template>
  <div class="members">
    <Titles msg="Se juntar ao clã"
      ><img id="icon-member" src="../assets/group.svg" alt="" />
      <Container>
        <a href="mailto:vdegaspari.vm@gmail.com">Nos mande um email!</a>
      </Container>
      <Container><Form /></Container>
    </Titles>
  </div>
</template>
<script>
// @ is an alias to /src

import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import Form from "@/components/Vforms.vue";

export default {
  components: {
    Container,
    Titles,
    Form
  }
};
</script>

<style lang="scss" scoped>
.members {
  height: 100vh;
  padding-bottom: 40px;
  text-align: center;
}
#icon-member {
  max-width: 120.7px;
  max-height: 120.7px;
  margin: 10px;
}
</style>
