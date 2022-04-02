<template>
  <div class="conrollerlogin">
    <header-nav/>
    <div class="container">
      <br /><br /><br />
      <div class="row">
        <div class="col-md-7">
          <ul>
            <li>
              <img src="../../../../assets/imgs/check.png" /> 
              Design DGPR
              compaint forms to collect and store person related data and
              concents.
            </li>
            <li>
              <img src="../../../../assets/imgs/check.png" />
              DGPR conpaints
              forms
            </li>
            <li>
                <img src="../../../../assets/imgs/check.png" />
            Easy to use</li>
            <li>
              <img src="../../../../assets/imgs/check.png" />
              Secure hosting in
              Germany
            </li>
            <li>
              <img src="../../../../assets/imgs/check.png" />
              Fullfills all DGPR
              compaints on right to change, delete and view data.
            </li>
          </ul>
          <br /><br /><br /><br />
          <h2 style="padding-left: 50px; padding-bottom: 30px">
            Organizations using OkayForms
          </h2>
          <div class="row" style="padding-left: 50px">
            <div class="col-md-3">
              <div
                class="card"
                style="border-radius: 50%; border: 1px solid black"
              ></div>
            </div>
            <div class="col-md-3 boxStyle">
              <div
                class="card"
                style="border-radius: 50%; border: 1px solid black"
              ></div>
            </div>
            <div class="col-md-3 boxStyle">
              <div
                class="card"
                style="border-radius: 50%; border: 1px solid black"
              ></div>
            </div>
            <div class="col-md-3 boxStyle">
              <div
                class="card"
                style="border-radius: 50%; border: 1px solid black"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <h2>Start your free trial now</h2>
          <h3>Try out SayYesNo free for one month</h3>
          <form>
            <br /><br />
            <div class="mb-5">
              <p class="usericon mb-0">
                <img src="../../../../assets/imgs/message.png" alt="">
              <input
                type="email"
                class="form-control input_field"
                id="inputUserName"
                aria-describedby="userName"
                placeholder="Enter Your Email"
              />
              </p>
            </div>
             <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberCheck"
                  />
                  <label class="form-check-label" for="rememberCheck"
                    >I accept <u class="underline">privacy statement.</u></label
                  >
                </div>
            <div style="padding-top:150px">
            <router-link to="/Controller/register-details" class="text-center solidBtn">
              Register</router-link>
               
            >
            <!-- > -->
            </div><br/>
            <div>
              <label for="">Already have an account?</label> &nbsp;
            <router-link to="/Controller/" class="link_style"><u class="underline">Login</u></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../../../shared/components/HeaderNav.vue';

export default {
  components: {  HeaderNav},
};
</script>
<style scoped>
h2 {
  font-family: var(--font-family-roboto-slab);
  font-weight: 900;
  font-size: 3rem;
}
h3
{
  font-family: var(--font-family-roboto-slab);
  text-align: left;
  padding-top:10px;
}
.underline
{
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
  padding-left:50px;
}
label,
.link_style {
  font-size: 14px;
  padding-top: 0px;
  color: var(--primary-color);
  font-family: var(--font-family-roboto-slab);
  padding-left: 10px;
  padding-bottom: 5px;

}
.text-white {
  font-size: 14px;
  color: brown;
}
ul {
  list-style-type: none;
}
ul li {
  padding-top: 12px;
  font-size: 1.3rem;
}
ul li img {
  height: 18px;
  padding-right: 15px;
}
.card {
  height: 100px;
  width: 100px;
}
input[type="checkbox"] {
  height: 16px;
  width: 16px;
  margin-right: 10px;
}
.text-white {
  font-size: 14px;
}
.form-check-input:checked {
    background-color:var(--primary-color);
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
