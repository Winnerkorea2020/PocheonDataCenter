import Chart from "chart.js/auto";

const tredingMychart1 = document.getElementById("tredingMychart1");

new Chart(tredingMychart1, {
  type: "bar",
  data: {
    labels: ["2017", "2018", "2019", "2020F", "2021F", "2022F"],
    datasets: [
      {
        data: [150, 160, 170, 190, 220, 260],
        borderWidth: 2,
        borderRadius: 5,
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
        borderWidth: 3,
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
        suggestedMin: 50,
        suggestedMax: 300,
        title: {
          display: true,
          text: "(십억달러)",
          color: "white",
        },
      },
      x: {
        ticks: { color: "white", beginAtZero: true },
      },
    },
  },
});

const tredingMychart2 = document.getElementById("tredingMychart2");

new Chart(tredingMychart2, {
  type: "bar",
  data: {
    labels: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20F",
      "21F",
      "22F",
      "23F",
    ],
    datasets: [
      {
        label: "비상업용(엔터프라이즈)",
        data: [
          42, 44, 46, 49, 52, 56, 60, 64, 74, 78, 82, 86, 87, 93, 95, 103, 108,
          112, 114, 115, 115, 115, 115, 115,
        ],
        borderWidth: 2,
        borderRadius: 5,
        borderWidth: 3,
      },
      {
        label: "상업용(코로케이션)",
        data: [
          11, 17, 19, 19, 19, 19, 23, 23, 25, 28, 30, 32, 35, 35, 35, 39, 41,
          41, 41, 43, 52, 62, 75, 90,
        ],
        borderWidth: 2,
        borderRadius: 5,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: top,
      },
    },
    animations: {
      tension: {
        duration: 10000,
        easing: "easeInQuad",
      },
    },
    scales: {
      y: {
        ticks: { color: "white", beginAtZero: true },
        beginAtZero: true,
        suggestedMin: 50,
        suggestedMax: 200,
        title: {
          display: true,
          text: "(개)",
          color: "white",
        },
        stacked: true,
      },
      x: {
        ticks: { color: "white", beginAtZero: true },
        stacked: true,
      },
    },
  },
});
