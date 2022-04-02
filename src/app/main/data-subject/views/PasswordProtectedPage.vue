<template>
  <div class="passwordProtectedPage">
    <header-nav controllerName="Controller Name" />
    <div class="passwordProtectBlock">
      <div class="passwordProtectBlockRow">
        <h4>Contact Form</h4>
        <div class="passowrdProtectSection">
          <p><img src="../../../../assets/imgs/admin/lock.png" alt="lock" /></p>
          <h4 class="formTitle">This Form is Password Protected</h4>
          <p class="formDesc">
            Please enter the password to view and fill out the form
          </p>

          <div class="passwordProtectInput">
            <input
              type="text"
              name="passwordText"
              id="passwordText"
              placeholder="Enter Your Password"
            />
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >I accept the <a href="#">privacy statements</a></label
              >
            </div>
          </div>
          <router-link to="/data-subject/verify" href="#" class="backBtn">Fill Form</router-link>
        </div>
<div class="passwordProtectFooter">
       <data-subject-footer/>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../../../shared/components/HeaderNav.vue';
import DataSubjectFooter from '../components/DataSubjectFooter.vue';
export default {
  components: { DataSubjectFooter,  HeaderNav }
};
</script>
<style scoped>
.passwordProtectFooter {
  /* display: flex;
  width: 260px;
  justify-content: center;
  align-items: center;
  margin: auto; */
  margin-top: 19px;
}
.passwordProtectBlock {
  margin: 30px 0;
}
.passwordProtectBlockRow {
  text-align: center;
  width: 480px;
  margin: auto;
}
.passowrdProtectSection {
  border: 1px solid var(--secondary-color-opacity);
  padding: 48px;
  margin-top: 22px;
  border-radius: 7px;
}
.passwordProtectBlockRow h4 {
  font-size: 2.4rem;
  font-weight: 800;
}
.passowrdProtectSection img {
  width: 32px;
}
.passowrdProtectSection h4.formTitle {
  font-size: 1.8rem;
}
p.formDesc {
  font-size: 1.4rem;
  color: var(--primary-color);
}
.passwordProtectInput .form-check {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}
.passwordProtectInput .form-check input {
  font-size: 1.4rem;
}
.passwordProtectInput label {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 700;
  font-family: var(--font-family-roboto-slab);
}
.passwordProtectInput a {
  font-size: 1.2rem;
  color: var(--primary-color);
  text-decoration: underline;
  font-weight: 800;
}
.passwordProtectInput input[type="text"] {
  margin-top: 19px;
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: 1px solid;
  font-size: 14px;
  padding-left: 19px;
  color: var(--primary-color);
}

.passwordProtectInput {
  margin-bottom: 40px;
}
.centeText {
    font-size: 1.9rem;
    text-align: center;
}
.userProfile {
    font-size: 1.9rem;
    text-align: right;
}
</style>
