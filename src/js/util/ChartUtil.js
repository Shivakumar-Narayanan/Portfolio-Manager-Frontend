import { renderPortfolioChart } from "../portfolioGraph/portfolioGraph.js";

export const updateChart = (url) => {
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

        // console.log(data)

        renderPortfolioChart(data);
    })
}