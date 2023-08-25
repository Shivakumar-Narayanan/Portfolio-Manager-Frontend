const portfolioDataMock = {
    totalValue: 100000, // Replace with your portfolio's total value
    totalValuePercent: 15.1, // Replace with your portfolio's percentage change
    tableData: [
        ["AAPL", "Apple Inc.", 150.00, 143.10, 100, 15000.00, 5000, 20.1],
        ["GOOGL", "Alphabet Inc.", 2800.00, 3142.24, 50, 14000.00, -2000, -17.3],
        ["MSFT", "Microsoft Corporation", 250.00, 260.50, 75, 19537.50, 2250, 15.0],
        ["AMZN", "Amazon.com Inc.", 3300.00, 3200.50, 30, 96015.00, -945, -5.0],
        ["TSLA", "Tesla, Inc.", 700.00, 725.25, 45, 32661.25, 1125, 25.0],
        ["FB", "Facebook, Inc.", 340.00, 325.75, 60, 19545.00, -882, -12.3],
        ["NVDA", "NVIDIA Corporation", 600.00, 580.25, 25, 14506.25, -493, -9.7],
        ["NFLX", "Netflix, Inc.", 550.00, 540.75, 40, 21630.00, -372, -6.5],
        ["PYPL", "PayPal Holdings, Inc.", 210.00, 215.50, 90, 19395.00, 495, 10.5],
        ["SQ", "Square, Inc.", 220.00, 235.75, 70, 16402.50, 1092, 22.5]
    ]
};

// const mockChartData = [];
// for (let i = 0; i < 100; i++) {
//     mockChartData.push(Math.floor(Math.random() * 1000));
// }

// let mockData = {
//     stockName: "",
//     profitLoss: "",
//     profitLossPercent: "",
//     chartData: mockChartData
//     // You can add other data fields here
// };

export const updatePortfolioList = () => {

    console.log("hi")

    const portfolioListUrl = "http://localhost:8083/portfolio/currentPortfolio";

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
                convertTo2DecimalPlaces(avgBuyPrice),
                convertTo2DecimalPlaces(stock["currentPricePerShare"]),
                convertTo2DecimalPlaces(stock["quantity"]),
                convertTo2DecimalPlaces(stock["currentTotalAmount"]),
                convertTo2DecimalPlaces(profitLoss),
                convertTo2DecimalPlaces(profitLossPercentage)
            ]

            // console.log(row)

            portfolio2DArray.push(row)
        }

        // portfolio2DArray can now be fed into the ui

        const totalPortfolioValueUrl = "http://localhost:8083/portfolio/currentTotalAmount";
        fetch(totalPortfolioValueUrl).then(response => response.json()).then(totalPortFolioValue => {

            const profitLossPercentageUrl = "http://localhost:8083/portfolio/profitLossPercentage";
            fetch(profitLossPercentageUrl).then(response => response.json()).then(profitLossPercentage => {
                
                // profitLossPercentage = convertTo2DecimalPlaces(parseDouble(profitLossPercentage))
                // console.log(profitLossPercentage)
                const portfolioData = {
                    totalValue: totalPortFolioValue, // Replace with your portfolio's total value
                    totalValuePercent: profitLossPercentage, // Replace with your portfolio's percentage change
                    tableData: portfolio2DArray
                }
                
                console.log(portfolioData)

                populatePortfolioData(portfolioData);
                generateTableRows(portfolioData);

            });

        });

    })

    const convertTo2DecimalPlaces = (d) => {
        return parseFloat(parseFloat(d).toFixed(2));
    }
}

// ----------------------------------------------------------

// Function to populate the portfolio total value and percentage
//export function populatePortfolioData(portfolioData = portfolioDataMock) {
    // const totalValueElement = document.getElementById('portfolio-total-value');
    // const totalValuePercentElement = document.getElementById('portfolio-total-value-percent');

    // // Set the total value text content
    // totalValuePercentElement.textContent = `${portfolioData.totalValuePercent.toFixed(2)}%`;
    // // Set the total value percentage text content
    // if (portfolioData.totalValuePercent >= 0) {
    //     totalValueElement.textContent = `$+${portfolioData.totalValue.toFixed(2)}`;
    //     totalValueElement.classList.add('text-lg', 'font-semibold', 'text-green-500', 'dark:text-green-400', 'pr-3')
    //     totalValuePercentElement.classList.add('text-lg', 'font-semibold', 'rounded-md', 'ml-5', 'pr-1', 'pl-1', 'text-green-500', 'bg-green-200', 'dark:text-green-400');
    // } else {
    //     totalValueElement.textContent = `$${portfolioData.totalValue.toFixed(2)}`;
    //     // totalValueElement.classList.add('text-lg', 'font-semibold', 'text-red-500', 'dark:text-red-400', 'pr-3')
    //     totalValueElement.classList.add('text-lg', 'font-semibold', 'text-green-500', 'dark:text-green-400', 'pr-3')
    //     totalValuePercentElement.classList.add('text-lg', 'font-semibold', 'rounded-md', 'ml-5', 'pr-1', 'pl-1', 'text-red-500', 'bg-red-200', 'dark:text-red-400');
    // }
//}

function populatePortfolioData(portfolioData=portfolioDataMock) {
    const totalValueElement = document.getElementById('portfolio-total-value');
    const container = document.getElementById('percentage-container'); 
    container.innerHTML = '';
    // Create the parent div element
    const divElement = document.createElement('div');

    // Set the total value percentage text content
    if (portfolioData.totalValuePercent >= 0) {
        totalValueElement.textContent = `$${portfolioData.totalValue.toFixed(2)}`;
        totalValueElement.classList.add('text-4xl','font-semibold')

        divElement.classList.add('flex', 'flex-row', 'rounded-md', 'ml-5', 'mt-2', 'w-fit', 'h-8', 'bg-green-200', 'text-green-500', 'dark:text-green-400', 'pr-1', 'pl-1');

        const svgTemplateId =  'suggestion-profit-arrow';
        const svgTemplate = document.getElementById(svgTemplateId);
        const svgClone = document.importNode(svgTemplate.content, true);
        
        const percentageElement = document.createElement('p');
        percentageElement.textContent = `${portfolioData.totalValuePercent .toFixed(2)}%`;
        percentageElement.classList.add('text-lg', 'font-semibold');

        // Append SVG and percentage elements to the parent div
        divElement.appendChild(svgClone);

        // container.removeChild(container.firstChild);
        divElement.appendChild(percentageElement);

        // Append the parent div to the container
        container.appendChild(divElement);
    } else {
        totalValueElement.textContent = `$${portfolioData.totalValue.toFixed(2)}`;
        totalValueElement.classList.add('text-4xl','font-semibold')

        divElement.classList.add('flex', 'flex-row', 'rounded-md', 'ml-5', 'mt-2', 'w-fit', 'h-8', 'bg-red-200', 'text-red-500', 'dark:text-red-400', 'pr-1', 'pl-1');

        const svgTemplateId =  'suggestion-loss-arrow';
        const svgTemplate = document.getElementById(svgTemplateId);
        const svgClone = document.importNode(svgTemplate.content, true);
        
        const percentageElement = document.createElement('p');
        percentageElement.textContent = `${portfolioData.totalValuePercent .toFixed(2)}%`;
        percentageElement.classList.add('text-lg', 'font-semibold');

        // Append SVG and percentage elements to the parent div
        divElement.appendChild(svgClone);

        // container.removeChild(container.firstChild);
        divElement.appendChild(percentageElement);

        // Append the parent div to the container
        container.appendChild(divElement);
    }
}

// Function to generate and populate the table rows
function generateTableRows(portfolioData=portfolioDataMock) {
    const tableBody = document.querySelector('#portfolio-table tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Loop through the table data and generate rows
    portfolioData.tableData.forEach(rowData => {

        const row = document.createElement('tr');

        row.addEventListener('mouseenter', () => {
            row.classList.add('cursor-pointer');
        });

        // Remove the cursor-pointer class when the mouse leaves
        row.addEventListener('mouseleave', () => {
            row.classList.remove('cursor-pointer');
        });

        let flag = 0;
        rowData.forEach((data, index) => {
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            const classesToAdd = [];

            if (index === 0) {
                classesToAdd.push('px-1.5', 'py-1', 'text-center');
            } else if (index === 1) {
                classesToAdd.push('px-8', 'py-1');
            } else if (index === 2 || index === 3 || index === 5) {
                classesToAdd.push('px-3', 'py-1', 'text-right');
            } else if (index === 4) {
                classesToAdd.push('px-3', 'py-1');
            } else if (index === 6) {
                data >= 0 ? classesToAdd.push('px-3', 'py-1', 'text-center', 'text-green-500') :
                    classesToAdd.push('px-3', 'py-1', 'text-center', 'text-red-500');
            } else if (index === 7) {
                classesToAdd.push('px-3', 'py-1', 'text-center');
                data >= 0 ? flag = 0 : flag = 1;
            }

            cell.classList.add(...classesToAdd);

            // Add the generated classes to the cell
            cell.textContent = index === 0 ? data : (index === 6 || index === 7) ? `$${data.toFixed(2)}` : data;

            if (index === 0) {
                // Generate random dark background color for the first cell
                const randomColor = getRandomDarkColor();
                cell.innerHTML = `<div class="bg-${randomColor} text-white dark:text-${randomColor}-200 font-semibold rounded-md mt-1 p-0.5">${data}</div>`;
            }
            else if (index == 7) {
                if (flag === 0) {
                    cell.innerHTML = `<div class= "bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5">${data}%</div>`;
                }
                else {
                    cell.innerHTML = `<div class= "bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5">${data}%</div>`;
                }
            }

            if (index === 0) {
                row.addEventListener('click', () => {
                    openModalWithData({
                        stockName: rowData[1],
                        profitLoss: rowData[6],
                        profitLossPercent: rowData[7]
                    });
                    renderStockAreaChart(mockData.chartData);
                });
            }

            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// Helper function to generate random dark color classes
function getRandomDarkColor() {
    const colors = ['blue', 'purple', 'pink', 'indigo', 'green', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `${colors[randomIndex]}-800`;
}