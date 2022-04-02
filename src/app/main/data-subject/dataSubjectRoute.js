import PasswordProtectedPage from "../data-subject/views/PasswordProtectedPage";
import EmailVerifyPage from "../data-subject/views/EmailVerifyPage.vue";
import appDataSubject from "../data-subject/appDataSubject";
import CreatePssword from "../data-subject/views/CreatePssword";
import DataSubjectMobileVerify from "../data-subject/views/DataSubjectMobileVerify";
import DataSubjectAddressVerify from "../data-subject/views/DataSubjectAddressVerify";
import AddressVerifyCode from "../data-subject/views/AddressVerifyCode";

const dataSubjectRoutes=[{
    path:"/data-subject", component:appDataSubject,
    children:[
        {
            path:'',component:PasswordProtectedPage
        },
        {
            path:'verify',component:EmailVerifyPage
        },
        {
            path:'email-verify',component:CreatePssword
        },
        {
            path:'mobile-verify',component:DataSubjectMobileVerify
        },
        {
            path:'address-verify',component:DataSubjectAddressVerify
        },
        {
            path:'address-code-verify',component:AddressVerifyCode
        },
        
    ]
}]
export default dataSubjectRoutes;