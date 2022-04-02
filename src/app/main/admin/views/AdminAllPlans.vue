<template>
  <div class="adminAllPlansBlock">
     <admin-header-nav bgColor="#b3b9ce"/>
    <admin-side-nav />
    <dashboard-slot>
      <admin-search title="Subscriptions Plans" button="button"/>
      <div class="allFromsTable tableColor">
        <!-- <div class="select_table">
          <select name="select" id="sele">
            <option value="controller">controller</option>
            <option value="admin">admin</option>
            <option value="data">data</option>
            <option value="auther">auther</option>
          </select>
        </div> -->
        <show-data-table :tableData="tableData" :tableHead="tableHead" />
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import AdminHeaderNav from '../components/AdminHeaderNav.vue';
import AdminSearch from "../components/AdminSearch.vue";
import AdminSideNav from "../components/AdminSideNav.vue";
import ShowDataTable from "../components/ShowDataTable.vue";
// import AdminTable from '../components/AdminTable.vue';
export default {
  components: {
    DashboardSlot,
    AdminSideNav,
    AdminSearch,
    ShowDataTable,
    AdminHeaderNav,
  },
  data() {
    return {
      countOfPage: 7,
      currPage: 1,
      tableData: [
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Auther",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "data subject",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit: 1234546789,
          monthlySubmission: "Controller",
          availableSpace: "Controller",
          monthlyformview: "Controller",
          status: "Controller",
        },
      ],
      tableHead: [
        "Plan Name",
        "Plan Duration",
        "Plan Price",
        "Plan Limit",
        "Monthly Submission",
        "Available Space",
        "Monthly Form View",
        "Status",
      ],
    };
  },
  computed: {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
.allFromsTable {
  width: 87%;
  margin: auto;
}
.allFromsTable table {
  width: 100%;
}

.allFromsTable thead th {
  font-size: 1.4rem;
}
.allFromsTable thead th {
  font-size: 1.6rem;
  background: var(--primary-color);
  color: #fff;
  padding: 10px;
  border: 1px solid var(--tertiary-color);
}
.allFromsTable tbody td {
  padding: 10px;
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 500;
  border: 1px solid var(--tertiary-color);
}
.allFromsTable {
  /* margin-top: 30px;
  max-height: calc(100vh - 186px);
  overflow: scroll; */
}
.allFromsTable .pagination li a {
  color: var(--primary-color);
  border: none;
}
::-webkit-scrollbar {
  /* display: none; */
}
.allFromsTable thead {
  position: sticky;
  top: 0;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.allFromsTable .pagination {
  margin-top: 10px;
}
.allFromsTable .pagination li {
  border: 1px solid var(--primary-color);
}
.selectAndPagination > div {
  flex: 0.4;
}
.selectAndPagination > nav {
  flex: 1;
}
.selectAndPagination {
  display: flex;
  margin-top: 12px;
}
.allFromsTable td img {
  width: 12px;
  margin-right: 15px;
}
</style>
