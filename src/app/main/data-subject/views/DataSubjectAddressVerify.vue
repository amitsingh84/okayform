<template>
  <div class="dataSubjectVerifyBlock">
    <header-slot />
    <div class="verifyContent">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <h3>Contact Form</h3>
          <div class="right_block">
            <h4>Please verify your email address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, odio! Ea magnam ab, deserunt officia similique
              necessitatibus magni porro saepe laboriosam sequi repellat
              corporis id laborum expedita harum modi unde.
            </p>
          </div>
          <div class="right_block">
            <h4>Please verify your email address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, odio! Ea magnam ab, deserunt officia similique
              necessitatibus magni porro saepe laboriosam sequi repellat
              corporis id laborum expedita harum modi unde.
            </p>
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
.verifyContent {
  padding: 30px 0;
  width: 90%;
  margin: auto;
  position: relative;
    height: calc(100vh - 80px);
}

.verifyContent h3{
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 19px;
}
.right_block {
    margin-top: 29px;
}
.footerStyle {
    position: absolute;
    bottom: 14px; 
}
.right_block p {
    font-size: 1.4rem;
    color: var(--secondary-color);
}
</style>
