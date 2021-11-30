export const DoughnutData = {
  type: "doughnut",
  data: {
    labels: [
      "Rent & Lease",
      "Administrative",
      "Maintenance",
      "Shopping",
      "Transport",
      "General",
      "Others",
    ],
    datasets: [
      {
        label: "",
        data: [35040.32, 3200.87, 8233.23, 2990.0, 1240.87, 45950.0, 950.0],
        backgroundColor: [
          "rgba(91, 199, 230, 1)",
          "rgba(81, 84, 111, 1)",
          "rgba(99, 205, 129, 1)",
          "rgba(238, 11, 11, 1)",
          "rgba(121, 99, 205, 1)",
          "rgba(255, 143, 120, 1)",
          "rgba(159, 0, 173, 1)",
        ],
        radius: 286,
        rotation: -90,
        cutout: 180,
      },
    ],
  },
  options: {
    legend: {
      display: !true,
      position: "right",
    },
  },
};

export default DoughnutData;
