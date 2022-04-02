<template>
  <div class="controllerSideNav">
     <div class="container-fluid controllerSideNavUrl" v-if="setting==1">
      <div class="">
        <router-link to="/controller/dashboard"
          ><img src="../../../assets/imgs/dashboard.png" />
          Dashboard</router-link
        >
      </div>
      <div>
        <router-link to="/controller/alldatasubject"
          ><img src="../../../assets/imgs/user.png" />Account</router-link
        >
      </div>
      <div>
        <router-link to="/controller/allforms"
          ><img src="../../../assets/imgs/folder.png" />Setting</router-link
        >
      </div>
       
    </div>
    <div class="container-fluid controllerSideNavUrl" v-else>
      <div class="">
        <router-link to="/controller/dashboard"
          ><img src="../../../assets/imgs/dashboard.png" />
          Dashboard</router-link
        >
      </div>
      <div>
        <router-link to="/controller/alldatasubject"
          ><img src="../../../assets/imgs/user.png" />Data Subjects</router-link
        >
      </div>
      <div>
        <router-link to="/controller/allforms"
          ><img src="../../../assets/imgs/folder.png" />Froms</router-link
        >
      </div>
      <div>
        <router-link to="/controller/createform"
          ><img src="../../../assets/imgs/add.png" />Add New Form</router-link
        >
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:['setting']
};
</script>
<style scoped>
.controllerSideNav {
  background-color: var(--primary-color);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 80px;
  width: 21rem;
}
.controllerSideNav .router-link-active {
  color: #fff;
}
.controllerSideNav img {
  width: 22px;
  filter: grayscale(100%);
}
.controllerSideNav a {
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--tertiary-color);
  font-size: 1.6rem;
}
.controllerSideNavUrl > div {
  margin: 30px 0;
}

.controllerSideNavUrl > div:nth-child(1) {
  margin-top: 10px;
}

.controllerSideNavUrl img {
  margin-right: 15px;
}
.router-link-active img {
  filter: brightness(100);
}
</style>
