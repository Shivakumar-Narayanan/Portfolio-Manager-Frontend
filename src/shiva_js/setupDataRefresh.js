import { updateChart } from "./chartUtil.js";
import { updatePortfolioList } from "./updatePortfolio.js";

var portfolioChart;

export const setupDataRefresh = () => {
    refreshData();
    var intervalId = setInterval(refreshData, 5000);
}

export const setupRefresh10Seconds = () => {
    initializePortfolioChart();
    RefreshData10Seconds();
    var intervalId = setInterval(RefreshData10Seconds, 10000);
}

const refreshData = () => {
    updatePortfolio();
}

const RefreshData10Seconds = () => {
    refreshGraph();
}

const updatePortfolio = () => {
    updateTotalPortfolioValue();

    updateProfitLossPercentage();

    updatePortfolioList();
}

const updateTotalPortfolioValue = () => {
    const totalPortfolioValuePlaceHolder = document.getElementById("totalPortfolioValue");
    const totalPortfolioValueUrl = "http://localhost:8083/portfolio/currentTotalAmount";
    fetch(totalPortfolioValueUrl).then(response => response.json()).then(response => totalPortfolioValuePlaceHolder.innerHTML = response);
}

const updateProfitLossPercentage = () => {
    const profitLossPercentagePlaceholder = document.getElementById("profitLossPercentage");
    const profitLossPercentageUrl = "http://localhost:8083/portfolio/profitLossPercentage";
    fetch(profitLossPercentageUrl).then(response => response.json()).then(response => profitLossPercentagePlaceholder.innerHTML = response);
}

const refreshGraph = () => {

    const startDate = '2017-01-01'
    const endDate = '2023-08-24';
    const valueOverTimeUrl = "http://localhost:8083/portfolio/portfolioValueOverTime?startDate=" + startDate + "&endDate=" + endDate;

    updateChart(portfolioChart, "area-chart", valueOverTimeUrl, setupDataRefresh, endDate);
}

const initializePortfolioChart = () => {
    // ApexCharts options and config
    const data = []

    let options = {
        chart: {
            height: "400", // Adjust the height here
            width: "800", // Adjust the width here
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#5fba77",
                gradientToColors: ["#5fba77"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2, // Adjust the line thickness here
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0,
            },
        },
        series: [
            {
                name: "Stock Data",
                data: data,
                color: "#5fba77",
            },
        ],
        xaxis: {
            categories: data.map((currentValue) => currentValue.y),
            labels: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
        },
    };

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("area-chart"), options);
        chart.render();
        portfolioChart = chart;
    }
}
