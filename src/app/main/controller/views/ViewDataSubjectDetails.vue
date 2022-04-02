<template>
  <div class="viewDataSubDetail">
    <header-nav />
    <controller-side-nav />
    <dashboard-slot>
      <search-form title="User Details" />
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
        </div>
        <div class="verificationLevel">
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
                  />
                  <label class="form-check-label" for="phoneNumber">
                    Phone Number
                  </label>
                </p>
                <p>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="email"
                  />
                  <label class="form-check-label" for="email"> Email </label>
                </p>
                <p>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="address"
                  />
                  <label class="form-check-label" for="address">
                    Address
                  </label>
                </p>
              </td>
            </tr>
          </table>
        </div>
        <div class="varificationStatus">
          <table>
            <tr>
              <th>Varification Status</th>
              <td>
                <img src="../../../../assets/imgs/star.png" alt="star" /><img
                  src="../../../../assets/imgs/star.png"
                  alt="star"
                /><img src="../../../../assets/imgs/star.png" alt="star" />
              </td>
            </tr>
          </table>
        </div>
        <div class="consentDetails">
          <h4>Consent Details</h4>
          <p>
            <span>Consents 1-</span> I accepted photo of mine way be shared on
            social media
          </p>
          <p>
            <span>Consents 1-</span> I accepted photo of mine way be shared on
            social media
          </p>
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
  font-weight: 600;
  font-size: 1.4rem;
  vertical-align: middle;
  color: var(--primary-color);
}
table th {
  font-family: var(--font-family-roboto-slab);
  min-width: 190px;
  font-size: 1.4rem;
  vertical-align: middle;
  color: var(--primary-color);
}
table tr {
  border-bottom: 8px solid #fff;
}
.viewUserDetails,
.varificationStatus {
  border-bottom: 1px solid var(--tertiary-color);
  padding-bottom: 24px;
}
.verificationLevel table th,
.verificationLevel table td {
  vertical-align: top;
}
.verificationLevel input {
  width: 15px;
  height: 15px;

  font-weight: 400;
  margin-right: 10px;
  margin-top: 0;
  box-shadow: none;
}
.verificationLevel input:checked {
  background-color: var(--tertiary-color);
  border: var(--tertiary-color);
}
.verificationLevel,
.consentDetails {
  margin-top: 24px;
}
.verificationLevel label {
  color: var(--primary-color);
  font-size: 1.4rem;
}
.verificationLevel p {
  display: flex;
  align-items: center;
}
.varificationStatus td img {
  width: 14px;
  margin-right: 14px;
}
.consentDetails p {
  margin-bottom: 0;
  font-size: 1.4rem;
  color: var(--primary-color);
}

.consentDetails span {
  font-size: 1.4rem;
  font-family: var(--font-family-roboto-slab);
  font-weight: 600;
  margin-right: 10px;
}
.consentDetails h4 {
  margin-bottom: 15px;
}
</style>
