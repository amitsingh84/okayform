<template>
    <div class="adminActAsController">
        <admin-header-nav bgColor="#b3b9ce"/>
        <admin-side-nav/>
        <dashboard-slot>
            <div class="adminActAsSearch">
                <div>
                    <p><img src="../../../../assets/imgs/admin/team.png" alt=""></p>
                    <h3>Act As Controller</h3>
                    <div class="inputControllerName">
                        <select name="controllerSearch" id="controllerSearch">
                            <option value="controller1">controller1</option>
                        </select>
                    </div>
                        <a href="#" class="solidBtn">Login</a>
                </div>
            </div>
        </dashboard-slot>
    </div>
</template>

<script>
import AdminHeaderNav from '../components/AdminHeaderNav.vue'
import DashboardSlot from '../../../slots/DashboardSlot.vue'
import AdminSideNav from "../components/AdminSideNav.vue";
export default 
{
  components: { AdminSideNav, DashboardSlot, AdminHeaderNav } 
     
}
</script>
        <style scoped> 
        .adminActAsSearch {
  height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.adminActAsSearch > div {
    text-align: center;
    text-align: center;
    padding: 60px 30px;
    width: 300px;
    border-radius: 7px;
    background: linear-gradient(0deg, rgba(183,183,215,1) 0%, rgba(114,122,167,1) 100%);
    border: 2px solid #a2aac9;
}
.inputControllerName select {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border-radius: 7px;
    border: none;
    font-size: 1.4rem;
    margin-bottom: 30px;
}
.adminActAsSearch img {
    /* width: 54px; */
}
.adminActAsSearch h3 {
    margin-bottom: 64px;
    color: #fff;
    margin-top: 19px;
}
        </style>