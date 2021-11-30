<template>
  <div>
    <canvas id="doughnut"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import DoughnutData from "../DoughnutData";
export default {
  data() {
    return {
      DoughnutData,
    };
  },
  mounted() {
    const ctx = document.getElementById("doughnut");
    new Chart(ctx, this.DoughnutData);
  },
};
</script>
