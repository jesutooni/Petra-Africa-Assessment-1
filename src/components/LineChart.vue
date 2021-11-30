<template>
  <div>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import LineChartData from "../LineChartData";
export default {
  data() {
    return {
      LineChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("line-chart");
    new Chart(ctx, this.LineChartData);
  },
};
</script>
