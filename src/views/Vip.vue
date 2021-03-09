<template>
  <div class="vip-container">
    <Titles msg="Members 💎">
      <Container v-scrollanimation>
        <div class="overflow-auto">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>

          <b-table
            id="my-table"
            :per-page="perPage"
            :items="members"
            :current-page="currentPage"
            small
          >
          </b-table>
        </div>
      </Container>
    </Titles>
  </div>
</template>

<script>
import Container from "@/components/Vcontainers.vue";
import Titles from "@/components/Vtitles.vue";
import apiClient from "../utils/apiClient";
export default {
  components: {
    Container,
    Titles
  },
  data() {
    return {
      members: {},
      vip: [],
      perPage: 4,
      currentPage: 1
    };
  },
  computed: {
    rows() {
      return this.members.length;
    }
  },
  methods: {
    async chamaApi() {
      this.members = await apiClient.getMember();
    },
    forNomes() {
      for (let index = 0; index < this.members.length; index++) {
        let membro = this.members;
        console.log(membro);
      }
    }
  },
  mounted() {
    this.chamaApi();
  }
};
</script>
<style scoped>
.overflow-auto {
  width: 100%;
}
.vip-container {
  height: 100vh;
}
.before-enter {
  opacity: 0;
  transition: all 0.5s ease-out;
  transform: translatey(10px);
}
.enter {
  opacity: 1;
  transform: translatey(0px);
}
</style>
