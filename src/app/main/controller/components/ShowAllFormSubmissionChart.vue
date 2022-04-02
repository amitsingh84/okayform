<template>
<div>

<canvas id="myChart" ref="myChart"></canvas>
</div>
</template>


<script>
import Chart from "chart.js"
import config from "./responsechart"
//  const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
export default {
    data() {
        return {
             config:config
        }
    },
  mounted() {
    // const ctx = document.getElementById('myChart'); 
    const ctx=this.$refs["myChart"]
    new Chart(ctx, this.config);
     
  }
}
</script>

<style scoped>

</style>