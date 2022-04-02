import Setting from './Compnents/Setting.vue'; 
import RightSideMenu from './Compnents/RightSideMenu.vue'; 
import NewTesting from '../formBuilder/NewTesting.vue'; 
const authRoutes = [
   
  {
    path: '/right',
    component: NewTesting,
    children: [
       
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      },
      {
        path: 'new',
        name: 'right',
        component: RightSideMenu
      },
      
    ]
  }
];

export default authRoutes;
