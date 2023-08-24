export const updateChart = (chart, chartId, url, startDate, endDate) => {
    const data = [];

    fetch(url).then(response => response.json()).then(response => {

        const responselen = response.length;
        for (let i = 0; i < responselen; i++) {
            const item = response[i];
            const x = item["key"]
            const y = item["value"]

            const obj = {
                x: x,
                y: y
            }

            data.push(obj)
        }

        if (data.length > 0) {
            if (document.getElementById(chartId) && typeof ApexCharts !== 'undefined') {
                chart.updateOptions({
                        series: [
                            {
                                data: data,
                            },
                        ]
                    }
                );
            }
        }
    })
}