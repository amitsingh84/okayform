<template>
  <div class="adminDashboard">
     <admin-header-nav bgColor="#b3b9ce"/>
    <admin-side-nav />
    <dashboard-slot>
      <div class="adminDashboardBlock">
        <h3>DASHBOARD</h3>
        <div class="container-fluid">
          <div class="row">
            <div class="col-4"><show-all-users /></div>
            <div class="col-8">
              <div class="allFormAndPlanData">
                <div class="allFormAndPlanDataRow">
                  <div class="allUnpaidForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                  <div class="allPaidForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
                <div class="allFormAndPlanDataRow">
                  <div class="allSubmitForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                  <div class="allPlan allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="allUserVisitorAndchart">
                <div class="allUserVisitor">
                  <div class="userVisitorRow">
                    <div class="allVerifiedUser">
                      <img src="../../../../assets/imgs/admin/security.png" alt="" />
                      <h4>Verified User</h4>
                      <p>200</p>
                    </div>
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">
                        <img src="../../../../assets/imgs/admin/user.png" alt="" />
                        <h4>Login User</h4>  
                        <p>130</p>
                      </div>
                    </div>
                  </div>
                  <div class="userVisitorRow">
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">                                                                                                                                                                                                                                                                                                                                                                                        
                        <img src="../../../../assets/imgs/admin/bluestar.png" alt="" />
                        <h4>Rating</h4>
                        <p>5</p>
                      </div>
                    </div>
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">
                        <img src="../../../../assets/imgs/admin/visitors.png" alt="" />
                        <h4>Visitors</h4>
                        <p>6K</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="allUserChart">
                  <testing-chart/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import TestingChart from '../../controller/components/TestingChart.vue';
import AdminHeaderNav from '../components/AdminHeaderNav.vue';
import AdminSideNav from "../components/AdminSideNav.vue";
import ShowAllUsers from "../components/ShowAllUsers.vue";
// import adminService from "../services/adminService";
export default {
  components: { AdminSideNav,  DashboardSlot, ShowAllUsers, TestingChart, AdminHeaderNav },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  },
  mounted(){
    // const body = {
    //   SearchText: "",
    //     FromDate: "",
    //     ToDate: "",
    // };
    // adminService
    //       .activateUser(body)
    //       .then((response) => {
    //        console.log(response);
    //         this.dialog = true;
    //       })
    //       .catch((error) =>function(){
    //            console.log(error)

    //       } );
  }
};
</script>
<style scoped>
.adminDashboardBlock h3 {
  margin-left: 22px;
  padding-top: 19px;
  font-weight: 600;
}
.adminDashboardBlock {
  height: calc(100vh - 80px);
  background: #f2f2f8;
}

.allUnpainFormImg img {
  width: 30px;
}
.allFormAndPlanDataRow {
  display: flex;
  gap: 18px;
}

.allFormAndPlanDataRow > div {
  flex: 1;
  background: #fff;
  border-radius: 7px;
  padding: 18px 20px;
  margin-bottom: 18px;
}

.allFromStyle {
  display: flex;
}

.allUnpainFormTitleNumber {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.allUnpainFormTitleNumber h4 {
  font-size: 2rem;
  font-weight: 800;
}

.allUnpainFormImg {
  flex: 1; 
  display: flex; 
  justify-content: flex-end;
  align-items: center;
}

.allUnpainFormTitleNumber p {
  margin-bottom: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
}
.allFormAndPlanData {
  margin-top: 12px;
  margin-right: 30px;
  margin-left: 20px;
}
.allVerifiedUser img {
  width: 30px;
  margin-bottom: 14px;
}
.allUserVisitorAndchart > div {
  flex: 1;
}
.allUserVisitorAndchart {
  display: flex;
  gap: 18px;
  margin-right: 30px;
  margin-left: 20px;
}
.userVisitorRow > div {
  flex: 1;
  background: #fff;
  margin-bottom: 18px;
  border-radius: 8px;
  padding: 11px 10px;
}
.userVisitorRow {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 19px;
}
.allVerifiedUser p {
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 800;
}
.allVerifiedUser h4 {
    font-weight: 800;
}
</style>
