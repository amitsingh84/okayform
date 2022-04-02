<template>
  <div class="coantainer-fulid">
    <div class="row g-0 ">
      <div class="col-md-2"> </div>
      <div class="col-md-10">
        <right-side-menu /> 
      </div>
    </div>
  </div>
</template>
<script>
// import Maincontent from "./Compnents/Maincontent.vue";
import RightSideMenu from "./Compnents/RightSideMenu.vue";
export default {
  components: {  RightSideMenu },
  name: "FormTemplate",
};
</script>