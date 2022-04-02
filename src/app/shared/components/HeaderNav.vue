<template>
  <div class="top_header_style">
<div>

    <div class="row">
      <div class="col-4">
        <p class="logo" style="color: #fff">OkayFroms</p>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <div v-if="controllerName" ><h4 class="text-white" style="font-size:1.9rem">{{controllerName}}</h4></div>
      </div>
      <div class="col-4">
        <div class="imageAvatar text-right" v-if="userid">
          <img
            @click="showSetting"
            src="../../../assets/imgs/person.png"
            alt=""
          />
          <div v-if="showData" class="showSettingStyle">
            <div class="arrowStyle"></div>
            <div class="container-fluid g-0">
              <div class="row g-0 profile_style">
                <div class="col-3">
                  <img src="../../../assets/imgs/person.png" alt="" />
                </div>
                <div class="col-9"><p>Hello, franklin</p></div>
              </div>
              <div class="bottomSetting">
                <p><router-link to="/controller/account-setting">Account Setting</router-link> </p>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  </div>
</template>

<script>
export default {
  components: {
  },
  props:['userid', 'controllerName'],
  data() {
    return {
      showData: false,
    };
  },
  methods: {
    showSetting() {
      this.showData = !this.showData;
    },
  },
};
</script>

<style scoped>
.top_header_style {
  background-color: var(--primary-color);
  min-height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
    top: 0;
    z-index: 9999;
}
.top_header_style > div{
  width: 97%;
  margin: auto;
}
.top_header_style a {
  color: #fff;
}
.row.profile_style p {
    font-size: 1.7rem;
    padding-top: 8px;
}
.row.profile_style {
    border-bottom: 1px solid;
    padding: 0 17px;
    padding-bottom: 15px;
}
.bottomSetting {
    padding-top: 12px;
}
.bottomSetting a{
  font-size: 1.4rem;
}
.bottomSetting p {
    font-size: 1.4rem;
    margin-right: 17px;
}
.arrowStyle:before {
   content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid #6868ac;
    top: -16px;
    z-index: 9999999;
    right: 7px;
}
</style>