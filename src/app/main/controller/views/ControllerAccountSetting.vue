<template>
  <div class="controllerAccountSetting">
    <header-nav userid="1"/>
    <controller-side-nav setting="1" />
    <dashboard-slot>
      <div class="row top">
        <div class="col-12  fieldName">
          <h4 style="font-weight:800">Account Details</h4>
          <hr width="90%" size="5" />
        </div>
      </div>
      <div class="container controllerAccountRow">
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Profile Picture</h4>
        </div>
        <div class=" p-2 col-md-4">
          <img src="../../../../assets/imgs/loginUser.png" alt="Avatar" />
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Company Logo</h4>
        </div>
        <div class=" p-2 col-md-4">
          <img src="../../../../assets/imgs/loginUser.png" alt="Logo" />
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
     <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Price Plan</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> Trial Period Ending-20-12-2022</p> 
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
     <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Email Address</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> franklin@gmail.com</p> 
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Password</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> *******************</p> 
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">First Name</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> Franklin</p> 
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Last Name</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> halffman</p> 
        </div>
         <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
      
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Mobile Number</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> Not verified yet!</p> 
        </div>
        <div class="col-md-3">
          <button class="solidBtn" style="margin-top:0;">Verify Mobile</button> 
        </div>
        <div class="col-md-2 p-4">
       <a href="#"><p>Why is this important?</p></a>
        </div>
        <div class="col-md-1 pt-2">
         <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link>
        </div>
      </div>
      <div class="row left showEditOnHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Mobile Number</h4>
        </div>
        <div class="col-md-4">
         <p class="account_setting_para_style"><strong style="font-size:1.3rem">:</strong> Not verified yet!</p> 
        </div>
        <div class="col-md-3">
          <button class="solidBtn" style="margin-top:0;">Verify Address</button> 
        </div>
        <div class="col-md-2 p-4">
         <a href="#"><p>Why is this important?</p></a>
        </div>
        <div class="col-md-1 pt-2">
         <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link>
        </div>
      </div>
      <div class="row left showEditWithoutHover">
        <div class="col-md-2"><h4 class="account_setting_heading_style">Verification Status</h4>
        </div>
        <div class=" p-2 col-md-4">
          <img src="../../../../assets/imgs/star.png" alt="Avatar" /> <img src="../../../../assets/imgs/star.png" alt="Avatar" /> <img src="../../../../assets/imgs/star.png" alt="Avatar" />
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-2"></div>
        <div class="col-md-1"> <router-link to="/controller" class="show_edit"><img  src="../../../../assets/imgs/editDataColor.png" alt="" /></router-link></div>
      </div>
       <div class="row left  mt-5">
        <div class="col-md-12 text-end"><a href="#" style="text-decoration:underline;font-size:12px;">Delete Account</a>
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
export default {
  data() {
    return {
      testing: "power",
    };
  },
  components: { HeaderNav, ControllerSideNav, DashboardSlot },
};
</script>

<style scoped>
.fieldName {
  margin-left: 50px;
  margin-bottom: 5px;
}
.top {
  margin-top: 20px;
}
 
  img{
    width:20px
  }

.show_edit img {
    width: 19px;
}

.show_edit {
    text-align: right;
}
/*-------------new style------------*/
.left{
  padding-left:33px;
}
 
.account_setting_para_style {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 0;
    padding: 7px 0;
}
.account_setting_heading_style {
    font-size: 1.3rem; 
    padding: 7px 0;
}
.show_edit {
    display: none;
    padding:7px 0;
}
.showEditOnHover, .showEditWithoutHover{
  border: 1px solid transparent;
  width: 98%;
  margin: auto;
}
.controllerAccountRow> .showEditOnHover:hover {
    border: 1px solid var(--primary-color);
}
.controllerAccountRow> .showEditOnHover:hover .show_edit {
    display: block;
}
.row.top {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 10px;
}
</style>
        