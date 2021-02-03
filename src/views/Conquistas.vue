<template>
  <div class="members">
    <Titles msg="Maiores elos Rainbow Six"
      ><b-img id="icon-member" src="../assets/trofeu.svg" alt="" />
      <Container>
        <Members texto="Victor Degaspari - season Shifting Tides">
          <Titles msg="Top MMR 3606" :style="'background: #2c3e50'">
            <b-img v-show="this.SpinnerShow == false" :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Renato Rodrigues - season Phantom Sight">
          <Titles msg="Top MMR 3434" :style="'background: #2c3e50'">
            <b-img v-show="this.SpinnerShow == false" :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Raphael Gomes - season Shifting Tides">
          <Titles msg="Top MMR 3887" :style="'background: #2c3e50'">
            <b-img v-show="this.SpinnerShow == false" :src="plat2" />
          </Titles>
        </Members>
        <Members texto="Caio Domarco - season Steel Wave">
          <Titles msg="Top MMR 3387" :style="'background: #2c3e50'">
            <b-img v-show="this.SpinnerShow == false" :src="plat3" />
          </Titles>
        </Members>
      </Container>
      <Container>
        <Members texto="Leo Moretti - season Steel Wave">
          <Titles msg="Top MMR 3383" :style="'background: #2c3e50'">
            <b-img
              v-show="this.SpinnerShow == false"
              :src="plat3"
              :style="'positions:relative; z-index: 9999'"
            />
          </Titles>
        </Members>
        <Members texto="Caio Di Bene">
          <Titles msg="Top MMR ...." :style="'background: #2c3e50'">
            <b-img v-show="this.SpinnerShow == false" :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Felipe Trevisan">
          <Titles msg="Top MMR ...." :style="'background: #2c3e50'">
            <b-img v-if="this.SpinnerShow == false" :src="plat3" />
          </Titles>
        </Members>
        <Members texto="Matheus Cazelato">
          <Titles msg="Top MMR ...." :style="'background: #2c3e50'">
            <b-img v-show="SpinnerShow == false" :src="plat" />
          </Titles>
        </Members>
      </Container>
    </Titles>
    <SpinnerImages v-show="SpinnerShow" />
  </div>
</template>
<script>
// @ is an alias to /src

import Members from "@/components/Vmembers.vue";
import Container from "@/components/Vcontainers.vue";
import SpinnerImages from "@/components/Vspinner.vue";
import Titles from "@/components/Vtitles.vue";
import plat from "@/assets/platinum-1.svg";
import plat2 from "@/assets/platinum-2.svg";
import plat3 from "@/assets/platinum-3.svg";
import gold1 from "@/assets/gold-1.svg";

export default {
  components: {
    Members,
    Container,
    Titles,
    SpinnerImages
  },
  data() {
    return {
      SpinnerShow: true,
      plat: plat,
      plat2: plat2,
      plat3: plat3,
      gold1: gold1
    };
  },
  methods: {
    paraLoading() {
      setTimeout(() => (this.SpinnerShow = false), 5 * 200);
    }
  },
  mounted() {
    this.paraLoading();
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
b-img {
  width: 100%;
  height: 250px;
}
.card-text {
  font-size: 19px;
}
</style>
