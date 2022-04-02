<template>
 
  <header-nav/>
  <div class="center">
    <div>
      <h2>Welcome to OkayForms</h2>
      <h3>
        Thankyou! Please choose password to be able to change or delete your
        personal related data in future.
      </h3>
    </div>
    <form>
      <div class="row">
        <div class="col-md-6">
          <p class="usericon mb-0">
            <img src="../../../../assets/imgs/lock.png" alt="" />
            <input
              type="password"
              class="form-control input_field"
              id="inputpassword"
              aria-describedby="password"
              placeholder="Enter Password"
            />
          </p>
        </div>
        <div class="col-md-6">
          <p class="usericon mb-0">
            <img src="../../../../assets/imgs/lock.png" alt="" />
            <input
              type="password"
              class="form-control input_field"
              id="inputRe-typepassword"
              aria-describedby="Re-typepassword"
              placeholder="Re-Type Password"
            />
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p class="usericon mb-0">
            <img src="../../../../assets/imgs/loginUser.png" alt="" />
            <input
              type="text"
              class="form-control input_field"
              id="fName"
              aria-describedby="fName"
              placeholder="Enter First Name"
            />
          </p>
        </div>
        <div class="col-md-6">
          <p class="usericon mb-0">
            <img src="../../../../assets/imgs/loginUser.png" alt="" />
            <input
              type="text"
              class="form-control input_field"
              id="lname"
              aria-describedby="lname"
              placeholder="Enter Last Name"
            />
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="usericon mb-0">
            <img src="../../../../assets/imgs/company.png" alt="" />
            <input
              type="text"
              class="form-control input_field"
              id="cname"
              aria-describedby="cname"
              placeholder="Enter Company Name"
            />
          </p>
        </div>
      </div>
     
      <div class="row">
        <div class="col-12">
             <div class="chkbox">
        <input type="checkbox" class="form-check-input" id="rememberCheck" />
        <label class="form-check-label" for="rememberCheck"
          >I agree to term & condition.</label
        >
      </div>
          <input type="checkbox" class="form-check-input" id="rememberCheck" />
          <label class="form-check-label" for="rememberCheck"
            >I agree to data processing agreement.</label
          >
        </div>
        <div class="col-12 txt-right" style="padding-bottom: 10px"  >
            <router-link
              class="text-center solidBtn buttonStyle"
              to="/controller/Dashboard"
              >Register</router-link
            >
          <!-- <register-btn
            class="d-flex flex-grow-1 align-items-center justify-content-center"
          >
            <router-link
              class="text-center registerBtn"
              to="/controller/Dashboard"
              >Register</router-link
            >
          </register-btn> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderNav from '../../../shared/components/HeaderNav.vue';
// import HeaderSlot from "../../../slots/HeaderSlot.vue";
// import RegisterBtn from "../../../slots/NavigateBtn.vue";
export default {
  components: {  HeaderNav },
};
</script>

<style scoped>
.buttonStyle {
    color: #fff;
    padding-left: 40px;
    width: 38%;
    margin-left: auto;
}
.buttonStyle:hover{
    color:var(--primar-color)
}
h2 {
  font-family: var(--font-family-roboto-slab);
  font-weight: 900;
  font-size: 3rem;
  text-align: left;
  padding: 10px;
}
h3 {
  font-family: var(--font-family-roboto-slab);
  text-align: left;
  padding: 10px;
}
.underline {
  font-family: var(--font-family-roboto-slab);
  font-size: 14px;
  font-weight: bold;
}
a.registerBtn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
a.registerBtn:hover {
  color: #fff !important;
}
.input_field {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 40px;
  color: var(--secondary-color);
}
::placeholder{
    color: var(--secondary-color);
}
label,
a {
  font-size: 14px;
  color: var(--secondary-color);
  font-family: var(--font-family-roboto-slab);
  padding-left: 10px;
}
.text-white {
  font-size: 14px;
  color: brown;
}
.center {
  width: 70%;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.row {
  padding: 15px;
  text-align: left;
}
.chkbox {
  text-align: left; 
}
input[type="checkbox"] {
  height: 16px;
  width: 16px;
}
.text-white {
  font-size: 14px;
}
.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: #0d6efd;
}
p.usericon img {
  position: absolute;
  width: 23px;
  top: 8px;
  left: 10px;
}
p.usericon.mb-0 {
  position: relative;
}
</style>
