export const LineChartData = {
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
        backgroudColor: ["#FF503F"],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
};

export default LineChartData;
