<template>
  <div class="dataSubjectVerifyBlock">
    <header-nav  controllerName="Controller Name"/>
    <div class="verifyEmail">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <h3>Contact Form</h3>
          <div class="right_side_block">
           
            <p>
              <b
                >Thank you!</b> Please choose a password to bwe able to change or
                delete your Person-related data in furtue
            </p>
            <div class="right_side_box">
              <div class="right_side_box_row">
                 <form >
                <p>
                  <input
                    type="text"
                    name="EmailVerifyText"
                    id="EmailVerifyText" 
                    class="formControl"
                    placeholder="Password"
                    required
                  />
                  <span class="enterPassword">Password</span>

                </p>
                <p class="mt-4">
                  <input
                    type="text"
                    name="REmailVerifyText"
                    id="REmailVerifyText" 
                    class="formControl"
                    placeholder="Retype Password"
                    required
                  />
                 <span class="enterPassword">Retype Password</span>
                 <span class="errormsg valid-tooltip" disabled>Passoword Not Match</span>
                </p>
                </form>
              </div>
              <div class="login_btn">
                <button type="submit" class="solidBtn" style="padding: 7px 40px;">OK</button>
              </div>
            </div>
            <div class="emailVerifyFooterBlock">
                <p class="emailVerifyFooterBlockHead">Why do we do this?</p>
                <p><b>&lt;controller&gt;</b> has to provide means for you to review, change, correct or even delete your person related data </p>
            </div>
          </div>
        </div>
        <div class="footerStyle">
          <data-subject-footer />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderNav from '../../../shared/components/HeaderNav.vue';
  'use strict'
import DataSubjectFooter from "../components/DataSubjectFooter.vue";
export default {
  components: {  DataSubjectFooter, HeaderNav },
};
</script>

<style scoped>
.verifyEmail {
  padding: 30px 0;
  width: 90%;
  margin: auto;
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
    overflow-y: scroll;
}

.verifyEmail h3 {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 19px;
}


.right_side_block p,.right_side_block p b {
    color: var(--primary-color);
    font-size: 1.4rem;
}
.right_side_box {
    display: flex;
    align-items: flex-end;
    width: 400px;
    padding: 48px 30px;
    border: 1px solid var(--primary-color);
    border-radius: 7px;
    gap: 19px;
    margin: 48px 0;
}

.right_side_box input {
    height: 38px;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 7px;
    background: transparent;
    padding-left: 17px;
} 
.right_side_box .right_side_box_row {
    flex: 1;
}
.right_side_box > div {
    flex: .4;
}
.right_side_box_row p{
    margin-bottom: 0;
    
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: transparent;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: transparent;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: transparent;
}
.emailVerifyFooterBlock {
    margin-bottom: 48px;
}
p.emailVerifyFooterBlockHead {
    font-weight: 700;
    margin-bottom: 4px;
    font-family:var(--font-family-roboto-slab)
}
::-webkit-scrollbar {
    display: none;
}
.right_side_box_row p {
    position: relative;
}

.right_side_box_row .enterPassword {
   position: absolute;
    left: 12px;
    top: 10px;
    font-size: 1.4rem;
    color: gray;
    z-index: -1;
}

.right_side_box_row input:focus~.enterPassword,.right_side_box_row input:target~.enterPassword,.right_side_box_row .formControl:not(:placeholder-shown)~.enterPassword { 
    top: -12px;
    background: #fff;
    color: var(--primary-color);
    z-index: 1;
} 
span.enterPassword {transition: .7s;}
</style>
