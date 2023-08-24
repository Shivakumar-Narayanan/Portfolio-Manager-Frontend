export const updatePortfolioList = () => {
    const portfolioListUrl = "http://localhost:8083/portfolio/currentPortfolio";
    const portfolioList = document.getElementById("portfolioList");

    const listElements = portfolioList.children;

    fetch(portfolioListUrl).then(response => response.json()).then(response => {

        const numStocks = response["stocksSnapshots"].length;

        const portfolio2DArray = []

        for (let i = 0; i < numStocks; i++) {
            const stock = response["stocksSnapshots"][i];

            const profitLoss = stock["currentTotalAmount"] - stock["totalBuyAmount"]
            const profitLossPercentage = convertTo2DecimalPlaces((profitLoss * 100) / stock["totalBuyAmount"])
            const avgBuyPrice = convertTo2DecimalPlaces(stock["buyPricePerShare"])
            const totalInvested = convertTo2DecimalPlaces(stock["totalBuyAmount"])

            const row = [
                stock["stock"]["ticker"],
                stock["stock"]["name"],
                avgBuyPrice,
                stock["currentPricePerShare"],
                stock["quantity"],
                totalInvested,
                stock["currentTotalAmount"],
                profitLoss,
                profitLossPercentage
            ]

            portfolio2DArray.push(row)
        }

        // portfolio2DArray can now be fed into the ui
    })

    const convertTo2DecimalPlaces = (d) => {
        return d.toFixed(2);
    }
}