// Example data fetched from your Spring Boot REST API
const stockIndexesIndia = [
    { direction: "profit", name: "NIFTY 50", totalPoints: 17990, percentageChange: 4.4, pointsLost: 34 },
    { direction: "loss", name: "Sensex", totalPoints: 4500, percentageChange: -2.1, pointsLost: 95 }
];

const stockIndexesWorld = [
    { direction: "profit", name: "Dow Jones", totalPoints: 34000, percentageChange: 3.2, pointsLost: 58 },
    { direction: "profit", name: "NASDAQ", totalPoints: 15000, percentageChange: 5.7, pointsLost: 72 },
    { direction: "loss", name: "FTSE 100", totalPoints: 6500, percentageChange: -1.8, pointsLost: 48 },
    { direction: "profit", name: "Hang Seng", totalPoints: 26000, percentageChange: 2.6, pointsLost: 68 }
];

function createStockIndexCard(indexData) {
    const cardContainer = document.getElementById('stockIndexContainer');

    // Create the card div element
    const card = document.createElement('div');
    card.className = 'bg-white ml-2 mt-2 w-48 p-1 pr-7 rounded-lg shadow-md flex flex-row';

    // Left Section (1:6 ratio)
    const leftSection = document.createElement('div');
    leftSection.className = indexData.direction === 'profit' ? 'w-1/7 flex flex-col justify-center rounded-md items-center bg-green-200 mt-3 mb-3 pr-1 pl-1' : 'w-1/7 flex flex-col justify-center rounded-md items-center bg-red-200 mt-3 mb-3 pr-1 pl-1'

    // Use the appropriate template based on the direction
    const arrowTemplate = document.getElementById(indexData.direction === 'profit' ? 'profit-arrow' : 'loss-arrow');
    if (arrowTemplate) {
        // Clone the template content and append it to the left section
        const arrowIcon = document.importNode(arrowTemplate.content, true);
        leftSection.appendChild(arrowIcon);
    }

    // Right Section (6:1 ratio)
    const rightSection = document.createElement('div');
    rightSection.className = 'w-6/7 flex flex-between justify-center';

    // Stock index details
    const stockDetails = document.createElement('div');
    stockDetails.className = 'w-3/4 p-2';

    const indexName = document.createElement('p');
    indexName.className = 'text-black text-sm font-semibold';
    indexName.textContent = indexData.name;

    const indexTotalPoints = document.createElement('p');
    indexTotalPoints.className = 'text-black text-sm font-normal';
    indexTotalPoints.textContent = indexData.totalPoints.toLocaleString();

    stockDetails.appendChild(indexName);
    stockDetails.appendChild(indexTotalPoints);

    // Percentage change and points lost
    const changeDetails = document.createElement('div');
    changeDetails.className = 'w-1/4 p-2';

    const percentageChange = document.createElement('p');
    percentageChange.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-semibold' : 'text-red-500 text-sm font-semibold';
    percentageChange.textContent = indexData.percentageChange + '%';

    const pointsLost = document.createElement('p');
    pointsLost.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-normal' : 'text-red-500 text-sm font-normal';
    pointsLost.textContent = indexData.pointsLost + 'pts';

    changeDetails.appendChild(percentageChange);
    changeDetails.appendChild(pointsLost);

    // Append sections to the card
    rightSection.appendChild(stockDetails);
    rightSection.appendChild(changeDetails);
    card.appendChild(leftSection);
    card.appendChild(rightSection);

    // Append the card to the container
    cardContainer.appendChild(card);
}

// // Loop through the stock index data and create cards
// stockIndexes.forEach((indexData) => {
//     createStockIndexCard(indexData);
// });


// Function to display India-specific cards
function displayIndiaStockIndexes() {
    const cardContainer = document.getElementById('stockIndexContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    // Loop through India-specific stock index data and create cards
    stockIndexesIndia.forEach((indexData) => {
        createStockIndexCard(indexData);
    });

    // Toggle tab styles
    const indiaTab = document.getElementById('indiaTab');
    const worldTab = document.getElementById('worldTab');
    indiaTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    indiaTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
    worldTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    worldTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
}

// Function to display Rest of World-specific cards
function displayWorldStockIndexes() {
    const cardContainer = document.getElementById('stockIndexContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    // Loop through Rest of World-specific stock index data and create cards
    stockIndexesWorld.forEach((indexData) => {
        createStockIndexCard(indexData);
    });

    // Toggle tab styles
    const indiaTab = document.getElementById('indiaTab');
    const worldTab = document.getElementById('worldTab');
    worldTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    worldTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
    indiaTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    indiaTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
}

// Event listeners for tab buttons
const indiaTab = document.getElementById('indiaTab');
const worldTab = document.getElementById('worldTab');

indiaTab.addEventListener('click', () => {
    displayIndiaStockIndexes();
});

worldTab.addEventListener('click', () => {
    displayWorldStockIndexes();
});

// Initially, display India-specific cards by default
displayIndiaStockIndexes();

//
// Different component!

let areaChartInstance = null;
let portfolioAreaChartInstance = null;


// This will be used by the static portfolio chart
function renderPortfolioAreaChart(data) {
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
                data: data,
                color: "#5fba77",
            },
        ],
        xaxis: {
            categories: data.map((_, index) => index),
            labels: {
                show: false,
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
        // If it doesn't exist, create a new chart instance
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            portfolioAreaChartInstance = new ApexCharts(document.getElementById("area-chart"), options);
            portfolioAreaChartInstance.render();
        }
    } else {
        // If it exists, update the chart with new data
        portfolioAreaChartInstance.updateSeries([
            {
                name: "Stock Data",
                data: data,
            },
        ]);
    }
}

// This will be used by the popup charts
function renderStockAreaChart(data) {
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
                data: data,
                color: "#5fba77",
            },
        ],
        xaxis: {
            categories: data.map((_, index) => index),
            labels: {
                show: false,
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
    if (!areaChartInstance) {
        // If it doesn't exist, create a new chart instance
        if (document.getElementById("modal-area-chart") && typeof ApexCharts !== 'undefined') {
            areaChartInstance = new ApexCharts(document.getElementById("modal-area-chart"), options);
            areaChartInstance.render();
        }
    } else {
        // If it exists, update the chart with new data
        areaChartInstance.updateSeries([
            {
                name: "Stock Data",
                data: data,
            },
        ]);
    }
}

// Sample data with 300 data points
const mockChartData = [];
for (let i = 0; i < 100; i++) {
    mockChartData.push(Math.floor(Math.random() * 1000));
}

//Section        
// Search bar things
const searchInput = document.getElementById('default-search');
const resultCard = document.getElementById('resultCard');
const dataList = document.getElementById('stock-options'); // Datalist element

// Static data for demonstration (replace with your own data)
const staticData = [
    { name: 'Apple Inc.' },
    { name: 'Microsoft Corporation' },
    { name: 'Amazon.com Inc.' },
    { name: 'Google LLC' },
    { name: 'Facebook, Inc.' },
    { name: 'Tesla, Inc.' },
];

let selectedOptionIndex = -1; // Initialize as -1 (no selection)

// Collection of list items
const listItems = [];

// Function to update the card with static data
function updateCard(query) {
    const filteredData = staticData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    if (filteredData.length > 0) {
        resultCard.innerHTML = '';
        listItems.length = 0; // Clear the list of items

        filteredData.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.textContent = item.name;
            itemElement.classList.add('cursor-pointer', 'hover:text-blue-500', 'px-2', 'py-1');

            itemElement.addEventListener('click', () => {
                selectOption(index);
            });

            listItems.push(itemElement); // Add the item to the collection
            resultCard.appendChild(itemElement);
        });

        // Update selected option index when the list is filtered
        if (selectedOptionIndex >= 0) {
            selectedOptionIndex = filteredData.findIndex(item => item.name === staticData[selectedOptionIndex].name);
        }

        resultCard.classList.remove('invisible');
    } else {
        resultCard.innerHTML = 'No results found.';
        resultCard.classList.add('invisible');
    }
}

// Event listener for input changes
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.length > 0) {
        updateCard(query);
    } else {
        resultCard.innerHTML = ''; // Clear the card when the input is empty
        resultCard.classList.add('invisible');
    }
});

// Event listener for keydown events on the document
document.addEventListener('keydown', (event) => {
    if (listItems.length === 0) return; // No items to navigate

    if (event.key === 'ArrowDown') {
        event.preventDefault(); // Prevent scrolling
        selectedOptionIndex = Math.min(selectedOptionIndex + 1, listItems.length - 1);
        updateSelectedItem();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault(); // Prevent scrolling
        selectedOptionIndex = Math.max(selectedOptionIndex - 1, -1);
        updateSelectedItem();
    } else if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        selectOption(selectedOptionIndex);
    }
});

let mockData = {
    stockName: "",
    profitLoss: "",
    profitLossPercent: "",
    chartData: mockChartData
    // You can add other data fields here
};

// Function to select an option and populate the search bar
function selectOption(index) {
    const selectedOption = listItems[index];
    if (selectedOption) {
        searchInput.value = selectedOption.textContent;
        searchInput.classList.add('ring-blue-500', 'border-blue-500'); // Change the styling
        resultCard.classList.add('invisible');

        // Create a mock data object for the selected stock (replace with actual data)
        const mockData = {
            stockName: selectedOption.textContent,
            profitLoss: '$2,221',
            profitLossPercent: '+2.1%',
            chartData: mockChartData
            // You can add other data fields here
        };

        // Open the modal with the selected data
        openModalWithData(mockData);
        console.log("SOption, After Open, Before Render");
        // Render the chart in the modal
        renderStockAreaChart(mockData.chartData); // Replace with the actual chart data
        console.log("SOption, After Render");

    }
}


// Function to update the styling of the selected item
function updateSelectedItem() {
    listItems.forEach((item, itemIndex) => {
        if (itemIndex === selectedOptionIndex) {
            item.classList.add('bg-blue-100'); // Add your desired styling for the selected item
        } else {
            item.classList.remove('bg-blue-100');
        }
    });
}

// Doing some modal magic
// Function to open the modal with data
function openModalWithData(data) {
    console.log("Clicked once");

    const stockNameElement = document.getElementById('modal-stock-name');
    const profitLossElement = document.getElementById('modal-profit-loss');
    const profitLossPercentElement = document.getElementById('modal-profit-loss-percent');

    // Populate modal elements with data
    stockNameElement.textContent = data.stockName;
    profitLossElement.textContent = data.profitLoss;
    profitLossPercentElement.textContent = data.profitLossPercent;

    const toggleButton = document.getElementById("defaultModalButton")
    toggleButton.click();
}

// Cooking with some dynamic portfolio rows
// Sample portfolio data (replace this with your actual data)
const portfolioData = {
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

// Function to populate the portfolio total value and percentage
function populatePortfolioData() {
    const totalValueElement = document.getElementById('portfolio-total-value');
    const totalValuePercentElement = document.getElementById('portfolio-total-value-percent');

    // Set the total value text content
    totalValuePercentElement.textContent = `${portfolioData.totalValuePercent.toFixed(2)}%`;
    // Set the total value percentage text content
    if (portfolioData.totalValuePercent >= 0) {
        totalValueElement.textContent = `$+${portfolioData.totalValue.toFixed(2)}`;
        totalValueElement.classList.add('text-lg','font-semibold','text-green-500', 'dark:text-green-400', 'pr-3')
        totalValuePercentElement.classList.add('text-lg','font-semibold','rounded-md','ml-5', 'pr-1', 'pl-1', 'text-green-500', 'bg-green-200', 'dark:text-green-400');
    } else {
        totalValueElement.textContent = `$-${portfolioData.totalValue.toFixed(2)}`;
        totalValueElement.classList.add('text-lg','font-semibold','text-red-500', 'dark:text-red-400', 'pr-3')
        totalValuePercentElement.classList.add('text-lg','font-semibold','rounded-md','ml-5', 'pr-1', 'pl-1', 'text-red-500', 'bg-red-200', 'dark:text-red-400');
    }
}

// Function to generate and populate the table rows
function generateTableRows() {
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
                if(flag === 0){
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

// Call the functions to populate data and generate table rows
populatePortfolioData();
generateTableRows();

// Generate portfolio chart
renderPortfolioAreaChart(mockData.chartData);
