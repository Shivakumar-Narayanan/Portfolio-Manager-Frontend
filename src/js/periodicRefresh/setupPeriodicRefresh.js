import { updateLiveTime } from "../liveTime/liveTime.js";
import { updatePortfolioList } from "../portfolioList/portfolioList.js";
import { generateTransactionTableRows } from "../transactionData/transactionData.js";
import { updateChart } from "../util/ChartUtil.js";

export const setupDataRefresh = () => {
    refreshData();
    var intervalId = setInterval(refreshData, 5000);
}

export const setupRefresh10Seconds = () => {
    RefreshData10Seconds();
    var intervalId = setInterval(RefreshData10Seconds, 10000);
}

const updatePortfolio = () => {
    // updateTotalPortfolioValue();

    // updateProfitLossPercentage();

    // updatePortfolioList();

    updatePortfolioList();
}

const refreshData = () => {
    updatePortfolio();
}

const RefreshData10Seconds = () => {
    refreshGraph();
    generateTransactionTableRows();
    updateLiveTime();
}

const updateTotalPortfolioValue = () => {
    const totalPortfolioValuePlaceHolder = document.getElementById("portfolio-total-value");
    const totalPortfolioValueUrl = "http://localhost:8083/portfolio/currentTotalAmount";
    fetch(totalPortfolioValueUrl).then(response => response.json()).then(response => totalPortfolioValuePlaceHolder.innerHTML = response);
}

const updateProfitLossPercentage = () => {
    const profitLossPercentagePlaceholder = document.getElementById("portfolio-total-value-percent");
    const profitLossPercentageUrl = "http://localhost:8083/portfolio/profitLossPercentage";
    fetch(profitLossPercentageUrl).then(response => response.json()).then(response => profitLossPercentagePlaceholder.innerHTML = response);
}

const refreshGraph = () => {

    const startDate = '2017-01-01'
    const endDate = '2023-08-24';
    const valueOverTimeUrl = "http://localhost:8083/portfolio/portfolioValueOverTime?startDate=" + startDate + "&endDate=" + endDate;

    updateChart(valueOverTimeUrl);
}