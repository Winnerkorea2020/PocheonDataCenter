import Chart from "chart.js/auto";

const ctx = document.getElementById("serviceMyChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        data: [1488.3, 1784.4, 2059.4, 2369.6, 2709.8, 3061.4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(201, 203, 207, 0.8)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: "white", beginAtZero: true },
        beginAtZero: true,
      },
      x: {
        ticks: { color: "white", beginAtZero: true },
      },
    },
  },
});
