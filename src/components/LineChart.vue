<template>
  <div>
    <div class="h-96">
      <canvas id="line-chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById("line-chart").getContext("2d");
    const gradientBg = ctx.createLinearGradient(0, 0, 2304, 0);

    gradientBg.addColorStop(0, "rgba(255, 80, 63, 0.1)");

    gradientBg.addColorStop(0.4, "rgba(255, 80, 63, 0)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "",
            data: [43, 60, 60, 122, 60, 38, 44, 80, 110, 84, 76],
            borderColor: "#FF503F",
            pointRadius: 0,
            tension: 0.35,

            backgroundColor: gradientBg,
            fill: true,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            offset: true,
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                const valueLegend = this.getLabelForValue(value);
                return valueLegend + "K";
              },
            },
          },
        },
      },
    });
  },
};
</script>
