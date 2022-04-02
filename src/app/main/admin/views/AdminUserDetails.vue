<template>
  <div >
    
         {{userData}}{{dataIndex}}
       <div>{{userData}}</div>
  </div>
</template>
<script>
 
export default {
    props:["dataIndex","userData"],
  components: {
   
   },
  data() {
    return {
      
    };
  },
   
};
</script>
<style scoped>
.allFromsTable {
  width: 87%;
  margin: auto;
} 

</style>
