<template>
  <div>
    <div class="w-72">
      <canvas id="doughnut"></canvas>
    </div>
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
