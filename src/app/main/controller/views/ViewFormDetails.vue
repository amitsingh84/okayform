<template>
  <div class="viewDataSubDetail">
    <header-nav />
    <controller-side-nav />
    <dashboard-slot>
      <search-form title="Form Details"/>
      <div class="viewDataSubBlock">
        <div class="downandPrintBtn">
          <a href="#">Download</a><a href="#">Print</a>
        </div>
        <div class="viewUserDetails">
          <table>
            <tr>
              <th>First Name</th>
              <td>John</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>Hanny</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>Johnny@gmail.com</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>+49-12345678</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>34 D/33 xyz Berlin</td>
            </tr>
          </table>
          <table class="versionTable">
            <tr>
              <th>Version</th>
              <td>Req 1.0</td>
            </tr>
          </table>
        </div>
        <div class="verificationLevel">
          <div class="verficationLeftBlock">

          
          <table class="status_table">
            <tr >
              <th>Status</th>
              <td style="font-weight:600">Published</td>
            </tr>
          </table>
          <table>
            
            <tr>
              <th>Verification Level</th>
              <td>
                  <p>

                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="phoneNumber"
                  checked
                />
                <label class="form-check-label " for="phoneNumber">
                  Phone Number
                </label>
                  </p>
                  <p>
                      <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="email"
                  checked
                />
                <label class="form-check-label" for="email">
                 Email
                </label>
                  </p>
                  <p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="address"
                  checked
                />
                <label class="form-check-label" for="address">
                  Address
                </label></p>
              </td>
            </tr>
          </table>
        
        <div class="varificationStatus">
            <table>
                <tr>
                    <th>Varification Status</th>
                    <td><img src="../../../../assets/imgs/star.png" alt="star"><img src="../../../../assets/imgs/star.png" alt="star"><img src="../../../../assets/imgs/star.png" alt="star"></td>
                </tr>
            </table>
        </div>
         </div>
           <div class="verficationRightBlock">
             <table>
               <tr>
                 <th>No. of invitaion </th>
                 <td>12</td>
               </tr>
               <tr>
                 <th>No. of Response</th>
                 <td>5</td>
               </tr>
               <tr>
                 <th>No. of change of Response Since Last Login</th>
                 <td>10</td>
               </tr>
               <tr>
                 <th>Password Protection</th>
                 <td>Protected</td>
               </tr>
               <tr>
                 <th>Accessibility</th>
                 <td style="color:green; font-weight:600">Public</td>
               </tr>
             </table>
           </div>
         </div>
      </div>
    </dashboard-slot>
  </div>
</template>
<script>
import ControllerSideNav from "../../../shared/components/ControllerSideNav.vue";
import HeaderNav from "../../../shared/components/HeaderNav.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import SearchForm from "../components/SearchForm.vue";
export default {
  components: { HeaderNav, ControllerSideNav, DashboardSlot, SearchForm },
};
</script>
<style scoped>
.viewDataSubBlock {
  padding: 10px 70px;
}

.downandPrintBtn {
  text-align: right;
}

.downandPrintBtn a {
  margin: 0 10px;
  text-decoration: underline;
  color: var(--primary-color);
}

table tr td {
  font-size: 1.4rem;
  vertical-align: middle;
  color: var(--primary-color);
}
table th {
  font-family: var(--font-family-roboto-slab);
  width: 200px;
  font-size: 1.4rem;
  vertical-align: middle;
  color: var(--primary-color);
}
table tr {
  border-bottom: 8px solid #fff;
}
.viewUserDetails {
  border-bottom: 1px solid var(--tertiary-color);
  padding-bottom: 24px;
}
.verificationLevel table th,.verificationLevel table td{
    vertical-align: top;
}
.verificationLevel input{
    width: 15px;
    height: 15px;
   
    font-weight: 400;
    margin-right: 10px;
    margin-top: 0;
    box-shadow: none;
}
.verificationLevel input:checked{
 background-color: var(--tertiary-color);
    border: var(--tertiary-color);
}
.verificationLevel {
    margin-top: 24px;
    display: inline-block;
}
.verificationLevel label {
    color: var(--primary-color);
    font-size: 1.4rem;
}
.verificationLevel p{
    display: flex;
    align-items: center;
}
.verficationLeftBlock {
    margin-right: 70px;
}
.varificationStatus td img {
    width: 14px;
    margin-right: 14px;
}
 .verificationLevel > div {
    float: left;
}
.versionTable{margin-left: 70px;}
.viewUserDetails > table {
    float: left;
}
.viewUserDetails {
    display: inline-block;
    margin-top: 23px;
    width: 100%;
}
.status_table{margin-block: 10px;}
</style>
