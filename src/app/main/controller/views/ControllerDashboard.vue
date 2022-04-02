<template>
  <div class="controllerDashboard">
    <header-nav userid="1"/>
    <div class="controllerDashboardBody">
      <controller-side-nav></controller-side-nav>
      <dashboard-slot>
        <div class="showControllerData">
          <div class="controllerDashSearch">
            <div class="controllerSearchRow">
              <span
                ><img src="../../../../assets/imgs/search.png" alt="search" />
                <input
                  type="search"
                  name="controllerSearch"
                  id="controllerSearch"
                  placeholder="Search in My Froms"
              /></span>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <show-all-data-subject />
              </div>
              <div class="col-md-9">
                <div class="controllerDashRight">
                  <div class="notificationMsg">
                    <div
                      class="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <img
                        src="../../../../assets/imgs/notification.png"
                        alt="notification"
                      />
                      Your Trial Expired. Decide How to continue, Please
                      <a href="#">Click Here</a>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div
                      class="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <img
                        src="../../../../assets/imgs/notification.png"
                        alt="notification"
                      />
                      Your Trial Expired. Decide How to continue, Please
                      <a href="#">Click Here</a>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                  <div class="totalFromCounter">
                    <show-all-form-response />
                  </div>
                  <div class="recentFromAndSubmissionSection">
                    <div class="recentFromAndSubmissionSectionRow">
                      <show-all-recent-form />
                      <div class="allFormSubmission">
                       <testing-chart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dashboard-slot>
    </div>
  </div>
</template>

<script>
import ControllerSideNav from "../../../shared/components/ControllerSideNav.vue";
import HeaderNav from "../../../shared/components/HeaderNav.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import ShowAllDataSubject from "../components/ShowAllDataSubject.vue";
import ShowAllFormResponse from "../components/ShowAllFormResponse.vue";
// import ShowAllFormSubmissionChart from '../components/ShowAllFormSubmissionChart.vue';
import ShowAllRecentForm from "../components/ShowAllRecentForm.vue";
import TestingChart from '../components/TestingChart.vue';
export default {
  components: {
    ControllerSideNav,
    DashboardSlot,
    HeaderNav,
    ShowAllDataSubject,
    ShowAllFormResponse,
    ShowAllRecentForm,
    TestingChart,
    // ShowAllFormSubmissionChart,
  },

  data() {
    return {
      seletComp: "controller-dashboard-data",
      showData: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
.controllerSearchRow {
  text-align: right;
  padding: 8px 17px 8px 10px;
}

.controllerSearchRow input {
  height: 33px;
  padding-left: 45px;
  border-radius: 7px;
  border: 1px solid #a0a5c5bd;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
}

.controllerDashSearch {
  border-bottom: 2px solid #a0a5c5;
}
.controllerSearchRow img {
  position: absolute;
  width: 16px;
  top: -4px;
  left: 19px;
}
.controllerSearchRow span {
  position: relative;
}

.notificationMsg > div,
.notificationMsg > div a {
  font-size: 1.5rem;
  background: #d3d3e7;
  border-radius: 7px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: 600;
  font-family: var(--font-family-roboto-slab);
}
.notificationMsg > div a {
  border: none !important;
  text-decoration: underline;
  margin-left: 19px;
}
.notificationMsg {
  margin-top: 13px;
}

.notificationMsg img {
  width: 30px;
  margin-right: 30px;
}

.notificationMsg > div,
.notificationMsg > div a {
  font-size: 1.3rem;
  background: #d3d3e7;
  border-radius: 7px;
  border: 1px solid;
  color: var(--primary-color);
  font-weight: 600;
  font-family: var(--font-family-roboto-slab);
  padding: 3px 13px;
}

.notificationMsg {
  margin-top: 13px;
}

.notificationMsg img {
  width: 23px;
  margin-right: 30px;
}
.notificationMsg .alert-dismissible .btn-close {
  padding: 0.8rem 1rem;
}

.controllerDashRight {
  margin-left: 2.4rem;
  margin-right: 1rem;
}
.totalFromCounter {
  margin-top: 24px;
}
.recentFromAndSubmissionSectionRow {
  display: flex;
  gap: 29px;
  margin-top: 19px;
}

.recentFromAndSubmissionSectionRow > div {
  flex: 1;
  height: calc(100vh - 403px);
}
.recentFromAndSubmissionSectionRow .allRecentForm {
  overflow-y: scroll;
}
</style>
