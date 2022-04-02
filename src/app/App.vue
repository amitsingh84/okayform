<template>
  <div>
    <!-- <Header>
      <router-link to="/home">Home</router-link>
    </Header> -->
    <router-view></router-view>
   
  </div>
</template>

<script>
// import Header from "./formBuilder/slots/Header.vue";
import "../../src/assets/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import "../../src/assets/styles/style.scss"
export default {
  name: "App",
  components: {
    // Header,
  },
};
</script> 

 <style scope>
a {
  color: rgb(156, 34, 34);
  text-decoration: none;
}
</style>
