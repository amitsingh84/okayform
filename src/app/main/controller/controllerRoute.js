import AppController from "../controller/AppController.vue"

import ControllerLogin from "./views/ControllerLogin.vue"
import ControllerDashboard from "./views/ControllerDashboard.vue"

import ControllerDatasubject from "./views/ControllerDatasubject.vue"
import ControllerNewForm from "./views/ControllerNewForm.vue"
import ControllerRegister from "./views/ControllerRegister.vue"
import ControllerAllForm from "./views/ControllerAllForm.vue"
import ViewDataSubjectDetails from "./views/ViewDataSubjectDetails.vue"
import ViewFormDetails from "./views/ViewFormDetails.vue"
import RegisterEmailByController from "./views/RegisterEmailByController.vue"
import ControllerAccountSetting from "./views/ControllerAccountSetting.vue"
const controllerRoutes=[{
    path:"/controller", component:AppController,
    children:[
        {
            path:'',component:ControllerLogin, name:'controller Login'
        },
        {
            path:'dashboard',component:ControllerDashboard, name:'controller Dashboard'
        },
        {
            path:'alldatasubject',component:ControllerDatasubject, name:'controller Datasubject'
        },
        {
            path:'createform',component:ControllerNewForm, name:'create form'
        },
        {
            path:'register-details',component:ControllerRegister, name:'controller Register'
        },
        {
            path:'allforms',component:ControllerAllForm
        },
        {
            path:'show-detail',component:ViewDataSubjectDetails
        },
        {
            path:'form-detail',component:ViewFormDetails
        },
        {
            path:'register', component:RegisterEmailByController
        },
        {
            path:'account-setting', component:ControllerAccountSetting
        }
         
        // {
        //     path:'alldatasubject',component:ControllerDatasubject
        // },
    ]
}]

export default controllerRoutes;