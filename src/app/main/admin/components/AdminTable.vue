<template>
    <div class="adminTable">
        <table id="example" class="display" style="width:100%">
            <thead>
            <tr >
                <th><input type="checkbox" name="check" id="checkAll"></th>
                <th v-for="(tabhead,i) in tablesHead" :key="i">{{tabhead}}</th>
                <th>Action</th>
            </tr>
          </thead>
           <tbody>
              <tr v-for="(data,index) in tables.slice(pageStart, pageStart + countOfPage)" :key="index">

                  <td><input type="checkbox" name="checkData" id="allDataCheck"></td>
                  <td v-for="(t,i) in Object.values(data)" :key="i">{{t}}</td>
                 
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
        </div>
    </div>
</template>

<script>

// import $ from 'jquery';
export default {
    data() {
    return {
      countOfPage: 7,
      currPage: 1,
     
      
      
    };
  },
   props:['tables','tablesHead'],
  
  mounted() {
      
      console.log(this.tables);
    //   $('#example').DataTable({
    //             responsive: true,
                
    //         });
  },
  computed: {
    pageStart() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage() {
      return Math.ceil(this.tables.length / this.countOfPage);
    },
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
  },
}
</script>

<style scoped>
.allFromsTable {
    width: 84%;
    margin: auto;
}
.allFromsTable table{
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
    margin-top: 30px;
    max-height: calc(100vh - 186px);
    overflow-y: scroll;
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
    flex: .4;
}
.selectAndPagination > nav{
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