<template>
  <div v-scrollanimation>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="auto"
      img-height="auto"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="tbng1"
            alt="image slot"
          />
          <h1>Solzão slc!</h1>
        </template>
      </b-carousel-slide>
      <b-carousel-slide text="1 2 3 time benga 1 2 3 time benga">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="tbng1"
            alt="image slot"
          />
          <h1>Raphão ta no estilo!</h1>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import tbng1 from "@/assets/tbng2.png";

export default {
  data() {
    return {
      tbng1: tbng1,
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
<style scoped></style>
