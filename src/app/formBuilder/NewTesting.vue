<template>
  <div style="width:100%">
      <router-link to="/right">right</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default { 
  created() {
    //this.$store.dispatch(authTypes.AUTO_LOGIN);
  },
};
</script>

<style>
</style>


