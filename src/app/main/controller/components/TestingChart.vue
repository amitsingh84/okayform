<template>
<div class="chartStyle">

  <h3 class="text-center">Form Submission</h3>
  <div style="max-width: 600px">
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
</div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 120,
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            width:'30px'
          },
        },
        scales: {
        //   y: {
        //     min: -200,
        //     max: 100,
        //     ticks: {
        //       callback: function (value) {
        //         return `${value}%`;
        //       },
        //     },
        //   },
        }, 
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr","May","june","july","aug","sep","nov","dec"],
        datasets: [
          {
            label: "Form Submitted",
            backgroundColor:"#192a6b",
            data: [120, 100, 80, 60, 40, 20, 0],
            
          },
        //   {
        //     label: "My Second Dataset",
        //     backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
        //     data: [-40, -20, -10, -10],
        //   },
        ],
      },
    };

    return {
      barChart,
    };
  },
};
</script>
<style scoped>
.chartStyle {
    background: #fff;
    padding: 19px 10px 31px 10px;
    border-radius: 7px;
}
.chartStyle h3{
    margin-bottom: 19px;
}
</style>