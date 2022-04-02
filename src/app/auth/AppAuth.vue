<template>
  <div style="width:100%">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app-auth",
  created() {
    //this.$store.dispatch(authTypes.AUTO_LOGIN);
  },
};
</script>

<style>
</style>


