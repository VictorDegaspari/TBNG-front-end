<template>
  <div class="modal" v-show="isLoading">
    <div class="loader">Loading...</div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: { type: Boolean, default: false }
  }
};
</script>

<style scoped>
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
}
.loader {
  color: #00b7ff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  position: absolute;
  content: "";
}
.loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #2c3e50;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 1.5s infinite ease 1s;
  animation: load2 1.5s infinite ease 1s;
}
.loader:after {
  width: 5.4em;
  height: 10.2em;
  background: #2c3e50;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 1.5s infinite ease;
  animation: load2 1.5s infinite ease;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.modal {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c3e50;
}
</style>
