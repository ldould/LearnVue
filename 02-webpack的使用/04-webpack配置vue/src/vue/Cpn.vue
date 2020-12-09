<template>
  <div>
    <div>cpn组件</div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "我是cpn组件",
    };
  },
};
</script>

<style>
h2 {
  color: green;
}
</style>
