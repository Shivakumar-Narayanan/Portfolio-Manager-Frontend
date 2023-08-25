let portfolioAreaChartInstance = null;

const defaultData = [
    {
        "y": 0,
        "x": '2017-01-01'
    },
    {
        "y": 0,
        "x": '2020-01-01'
    },
    {
        "y": 0,
        "x": '2023-01-01'
    }
]

// This will be used by the static portfolio chart
export const renderPortfolioChart = (data) => {

    if(!data || data.length === 0) {
        data = defaultData
    }

    console.log('rendering portfolio chart')
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
                show: true,
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
                data: data.map((currentValue) => currentValue.y),
                color: "#5fba77",
            },
        ],
        xaxis: {
            categories: data.map((currentValue) => currentValue.x),
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

    // Check if the chart instance exists
    if (!portfolioAreaChartInstance) {
        console.log(data)
        // If it doesn't exist, create a new chart instance
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            portfolioAreaChartInstance = new ApexCharts(document.getElementById("area-chart"), options);
            portfolioAreaChartInstance.render();
        }
    } else {
        // console.log(data)
        portfolioAreaChartInstance.updateOptions({
            series: [
                {
                    data: data.map((currentValue) => currentValue.y),
                }
            ],
            xaxis: {
                categories: data.map((currentValue) => currentValue.x)
            }
        }
        );
    }
}