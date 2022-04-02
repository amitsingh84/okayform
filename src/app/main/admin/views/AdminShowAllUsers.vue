<template>
  <div class="adminShowAllUsers">
    <header-slot :bgColor="'#b3b9ce'"> </header-slot>
    <admin-side-nav />
    <dashboard-slot>
      <admin-search title="Manage Users" />
      <div class="allFromsTable tableColor">
        <show-data-table :tableData="tableData" :tableHead="tableHead"/>
         <!-- <select name="testingSelect" id="testingSelect" v-model="currentEntries" @change="pageEntries">
      <option  v-for="se in showEntries" :key="se" :value="se">{{se}}</option>
    </select> -->
        <!-- <testing-table :tables="tableData" :tablesHead="tableHead" /> -->
        <!-- <admin-table :tables="tableData" :tablesHead="tableHead"/> -->
        <!-- <table id="example" class="display" style="width:100%">
            <thead>
            <tr>
                <th><input type="checkbox" name="check" id="checkAll"></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>User Type</th>
                <th>Action</th>
            </tr>
          </thead>
           <tbody>
              <tr v-for="(data,index) in tableData.slice(pageStart, pageStart + countOfPage)" :key="index">
                  <td><input type="checkbox" name="checkData" id="allDataCheck"></td>
                  <td>{{data.Firstname}}</td>
                  <td>{{data.lastname}}</td>
                  <td>{{data.email}}</td>
                  <td>{{data.mobile}}</td>
                  <td>{{data.usertype}}</td>
                  <td><a href="#"><img src="../../../../assets/imgs/admin/pencil.png" alt=""></a><a href="#"><img src="../../../../assets/imgs/admin/pencil.png" alt=""></a></td>
                  
              </tr>
          </tbody>
        </table>
         <div class="selectAndPagination">
             <div class="form-group">
      <select class="form-control" id="exampleFormControlSelect1" @change="selectData">
      <option value=7>7</option>
      <option value=10>10 </option> 
       <option value=700>All</option>
    </select>
    </div>

        <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item" v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)"><a class="page-link" href="">Prev</a></li>
      <li class="page-item" v-for="(n,index) in totalPage" :key="index" v-bind:class="{'active': (currPage === (n))}" @click.prevent="setPage(n)"><a class="page-link" href="">{{n}}</a></li>
      <li class="page-item" v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)"><a class="page-link" href="">Next</a></li>
    </ul>

  </nav>
        </div> -->
      </div>
    </dashboard-slot>
  </div>
</template>
<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import AdminSearch from "../components/AdminSearch.vue";
import AdminSideNav from "../components/AdminSideNav.vue";
// import TestingTable from '../components/TestingTable.vue';
// import AdminTable from '../components/AdminTable.vue';
import 'alga-css/dist/alga.min.css'
import ShowDataTable from '../components/ShowDataTable.vue';
// import {$array} from 'alga-js'
export default {
  components: {
    DashboardSlot,
    HeaderSlot,
    AdminSideNav,
    AdminSearch,
    // TestingTable,
    // AdminTable,
  
    ShowDataTable},
  data() {
    return {
      countOfPage: 7,
      currPage: 1,
      showEntries:[5,10,15,20,30],
      currentEntries:10,
      filteredEntries:[],
       
      tableData: [
        {
          Firstname: "Registraion1",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion2",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion3",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion4",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion5",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion6",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion7",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
        {
          Firstname: "Registraion8",
          lastname: "Bernard@gmail.com",
          email: "publish",
          mobile: 1234546789,
          usertype: "Controller",
        },
      ],
      tableHead: ["First Name	", "Last Name	", "Email", "Mobile", "User Type	"],
    };
  },
  computed: {
    pageStart() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage() {
      return Math.ceil(this.tableData.length / this.countOfPage);
    },
  },
  created() {
    
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    selectData(event) {
      this.countOfPage = event.target.value;
    },
   mounted() {
     console.log(this.tableData);
     console.log(this.currentEntries);
   },
      // pageEntries(){
      //   this.filteredEntries=$array.paginate(this.currentEntries)(1, this.tableData)
      //   console.log(this.tableData);
      //   console.log(this.currentEntries);
      // } 
  },
};
</script>

<style scoped>
.allFromsTable {
  width: 87%;
  margin: auto;
} 

</style>
