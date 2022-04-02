import appAdmin from "../admin/appAdmin.vue"

import AdminLogin from "./views/AdminLogin.vue"
import AdminAllForms from "./views/AdminAllForms.vue"
import AdminDashboard from "./views/AdminDashboard.vue"
import AdminShowAllUsers from "./views/AdminShowAllUsers.vue"
import AdminAllPlans from "./views/AdminAllPlans.vue"
import AdminActAsController from "./views/AdminActAsController.vue"
import AdminUserDetails from "./views/AdminUserDetails.vue"

const adminRoutes=[{
    path:"/admin", component:appAdmin,
    children:[
        {
            path:'',component:AdminLogin
        },
        {
            path:'dashboard',component:AdminDashboard
        },
        {
            path:'forms',component:AdminAllForms
        },
        {
            path:'all-users',component:AdminShowAllUsers
        },
        {
            path:'all-plans',component:AdminAllPlans
        },

        {
            path:'as-controller',component:AdminActAsController
        },
        {
            path:'user-details',component:AdminUserDetails
        },
    ]
}]

export default adminRoutes;