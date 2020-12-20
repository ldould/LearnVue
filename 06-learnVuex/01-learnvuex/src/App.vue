<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <hellow-vuex />
  </div>
</template>

<script>
import HellowVuex from "./components/HellowVuex.vue";
export default {
  components: { HellowVuex },
  name: "App",
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style></style>
