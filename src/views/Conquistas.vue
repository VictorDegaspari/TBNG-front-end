<template>
  <div class="members">
    <Titles msg="Maiores elos Rainbow Six"
      ><img id="icon-member" src="../assets/trofeu.svg" alt="" />
      <Container>
        <Members texto="Victor Degaspari - season Shifting Tides">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Renato Rodrigues - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Raphael Gomes - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat2" />
          </Titles>
        </Members>
        <Members texto="Caio Domarco - season 7">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
      </Container>
      <Container>
        <Members texto="Leo Moretti - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Caio Di Bene - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Felipe Trevisan - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Matheus Cazelato - season 6">
          <Titles msg="Top MMR 3330" :style="'background: #2c3e50'">
            <img :src="plat3" />
          </Titles>
        </Members>
      </Container>
    </Titles>
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import plat from "@/assets/plat.svg";
import plat2 from "@/assets/platinum-2.svg";
import plat3 from "@/assets/platinum-3.svg";

export default {
  components: {
    Members,
    Container,
    Titles
  },
  data() {
    return {
      plat: plat,
      plat2: plat2,
      plat3: plat3
    };
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
img {
  width: 100%;
  height: 250px;
}
</style>
