<template>
  <div>
    <h1>helloWorld</h1>
    带参数得:{{ this.$route.params }}

    <button @click="goChild">child</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goChild() {
      this.$router.push({
        name: "world1"
      });
      // this.$router.push("/hello/world/post/878787/world1");
    }
  }
};
</script>

<style>
</style>