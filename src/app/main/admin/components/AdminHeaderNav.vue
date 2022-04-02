<template>
  <div class="Header_conatiner" :style="bgColor ? `background-color:${bgColor}`:`background-color:${'var(--primary-color)'}`">
    <div class="container-fluid" >
     
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // bgColo:true
    }
  },
  props:['bgColor'],
  mounted() {
    console.log(this.bgColor)
  },
};
</script>
<style scoped>
.Header_conatiner {
  /* background-color: var(--primary-color); */
  min-height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
    top: 0;
    z-index: 9999;
}
.Header_conatiner a {
  color: #fff;
}
</style>