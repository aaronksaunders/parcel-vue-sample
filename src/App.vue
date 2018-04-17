<template>
  <div id="app" class="a">
    <h1>Hello {{ title }} 🚀</h1>
    <p>📦 Parcel Vue.js using v1.7 </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Vue.js with Parcel"
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333333;
  margin-top: 60px;
}

</style>