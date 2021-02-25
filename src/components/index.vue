<template>
  <div>
    <h1 @click="goHome">首页</h1>
    <button @click="go1">去hello</button>
    <button @click="go2">去detail</button>
    <button @click="go3">带参数</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/index");
    },
    go1() {
      this.$router.push("/hello");
    },
    go2() {
      this.$router.push({
        name: "detail"
      });
    },
    go3() {
      this.$router.push("/hello/world/post/999");
    }
  }
};
</script>

<style>
</style>