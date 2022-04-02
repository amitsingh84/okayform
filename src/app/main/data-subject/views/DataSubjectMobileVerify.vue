<template>
  <div class="dataSubjectVerifyBlock">
    <header-slot />
    <div class="verifyEmail">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <h3>Contact Form</h3>
          <div class="right_side_block">
              <h4>Thank you! Please verify your mobile number</h4>
            <p>
              We have Please choose a password to bwe able to change or
                delete your Person-related data in furtue
            </p>
            <div class="right_side_box">
              <div class="right_side_box_row">
                <p>
                  <input
                    type="text"
                    name="EmailVerifyText"
                    id="EmailVerifyText"
                    placeholder="Enter Verification Code"
                  />
                </p>
                 
              </div>
              <div class="login_btn">
                <a href="#" class="solidBtn">verify</a>
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
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import DataSubjectFooter from "../components/DataSubjectFooter.vue";
export default {
  components: { HeaderSlot, DataSubjectFooter },
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
    padding: 70px 30px;
    border: 1px solid;
    border-radius: 7px;
    gap: 19px;
    margin: 22px 0;
}

.right_side_box input {
    height: 38px;
    width: 100%;
    border-radius: 7px;
    border: 1px solid;
    padding-left: 10px;
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
.emailVerifyFooterBlock {
    margin-bottom: 48px;
}
p.emailVerifyFooterBlockHead {
    font-weight: 700;
    margin-bottom: 4px;
    font-family:var(--font-family-roboto-slab)
}
::-webkit-scrollbar {
    /* display: none; */
}
</style>
