// Example data fetched from your Spring Boot REST API
const stockIndexesIndia = [
    { direction: "profit", name: "NIFTY 50", totalPoints: 17990, percentageChange: 4.4, pointsChange: 34 },
    { direction: "loss", name: "Sensex", totalPoints: 4500, percentageChange: -2.1, pointsChange: 95 }
];

const stockIndexesWorld = [
    { direction: "profit", name: "Dow Jones", totalPoints: 34000, percentageChange: 3.2, pointsChange: 58 },
    { direction: "profit", name: "NASDAQ", totalPoints: 15000, percentageChange: 5.7, pointsChange: 72 },
    { direction: "loss", name: "FTSE 100", totalPoints: 6500, percentageChange: -1.8, pointsChange: 48 },
    { direction: "profit", name: "Hang Seng", totalPoints: 26000, percentageChange: 2.6, pointsChange: 68 }
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

    const pointsChange = document.createElement('p');
    pointsChange.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-normal' : 'text-red-500 text-sm font-normal';
    pointsChange.textContent = indexData.pointsChange + 'pts';

    changeDetails.appendChild(percentageChange);
    changeDetails.appendChild(pointsChange);

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


//Doing the above card switch tab section for top gainers and losers!
// Example data fetched from your Spring Boot REST API
const topGainersList = [
    { direction: "profit", name: "AAPL", totalPoints: 1000, percentageChange: 5.2, pointsChange: 50 },
    { direction: "profit", name: "AMZN", totalPoints: 800, percentageChange: 4.6, pointsChange: 40 },
    { direction: "profit", name: "MSFT", totalPoints: 1200, percentageChange: 6.1, pointsChange: 60 },
    { direction: "profit", name: "GOOGL", totalPoints: 950, percentageChange: 3.5, pointsChange: 35 },
    { direction: "profit", name: "FB", totalPoints: 1100, percentageChange: 5.5, pointsChange: 55 }
];

const topLosersList = [
    { direction: "loss", name: "TSLA", totalPoints: 750, percentageChange: -4.4, pointsChange: 30 },
    { direction: "loss", name: "NFLX", totalPoints: 600, percentageChange: -5.9, pointsChange: 40 },
    { direction: "loss", name: "TWTR", totalPoints: 480, percentageChange: -3.1, pointsChange: 20 },
    { direction: "loss", name: "SNAP", totalPoints: 850, percentageChange: -3.2, pointsChange: 30 },
    { direction: "loss", name: "ZM", totalPoints: 720, percentageChange: -4.5, pointsChange: 35 }
];

function createGainerLoserCard(indexData) {
    const cardContainer = document.getElementById('gainersLosersContainer');

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

    const pointsChange = document.createElement('p');
    pointsChange.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-normal' : 'text-red-500 text-sm font-normal';
    pointsChange.textContent = indexData.pointsChange + 'pts';

    changeDetails.appendChild(percentageChange);
    changeDetails.appendChild(pointsChange);

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
//     createGainerLoserCard(indexData);
// });


// Function to display India-specific cards
function displayGainerStocks() {
    const cardContainer = document.getElementById('gainersLosersContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    // Loop through India-specific stock index data and create cards
    topGainersList.forEach((indexData) => {
        createGainerLoserCard(indexData);
    });

    // Toggle tab styles
    const gainersTab = document.getElementById('gainersTab');
    const losersTab = document.getElementById('losersTab');
    gainersTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    gainersTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
    losersTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    losersTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
}

// Function to display Rest of World-specific cards
function displayLoserStocks() {
    const cardContainer = document.getElementById('gainersLosersContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    // Loop through Rest of World-specific stock index data and create cards
    topLosersList.forEach((indexData) => {
        createGainerLoserCard(indexData);
    });

    // Toggle tab styles
    const gainersTab = document.getElementById('gainersTab');
    const losersTab = document.getElementById('losersTab');
    losersTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    losersTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
    gainersTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');
    gainersTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');
}

// Event listeners for tab buttons
const gainersTab = document.getElementById('gainersTab');
const losersTab = document.getElementById('losersTab');

gainersTab.addEventListener('click', () => {
    displayGainerStocks();
});

losersTab.addEventListener('click', () => {
    displayLoserStocks();
});

// Initially, display India-specific cards by default
displayGainerStocks();

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

// Sample transaction data (replace this with your actual data)
const transactionData = {
    tableData: [
        ["AAPL", "Apple Inc.", 147.22, 30, 4416.6, "BUY", "08/05/2023", "DELETE"],
        ["MSFT", "Microsoft Corporation", 300.45, 20, 6009.0, "SELL", "08/06/2023", "DELETE"],
        ["AMZN", "Amazon.com Inc.", 3350.75, 5, 16753.75, "BUY", "08/07/2023", "DELETE"],
        ["GOOGL", "Google LLC", 2700.90, 10, 27009.0, "SELL", "08/08/2023", "DELETE"],
        ["FB", "Facebook, Inc.", 350.50, 15, 5257.5, "BUY", "08/09/2023", "DELETE"],
        ["TSLA", "Tesla, Inc.", 750.25, 8, 6002.0, "SELL", "08/10/2023", "DELETE"],
        ["NVDA", "NVIDIA Corporation", 320.60, 12, 3847.2, "BUY", "08/11/2023", "DELETE"],
        ["NFLX", "Netflix, Inc.", 520.80, 7, 3645.6, "SELL", "08/12/2023", "DELETE"],
        ["PYPL", "PayPal Holdings, Inc.", 275.35, 6, 1652.1, "BUY", "08/13/2023", "DELETE"],
        ["AAPL", "Apple Inc.", 147.22, 30, 4416.6, "BUY", "08/05/2023", "DELETE"],
    ]
};

// Function to populate the portfolio total value and percentage
function populatePortfolioData() {
    const totalValueElement = document.getElementById('portfolio-total-value');
    const container = document.getElementById('percentage-container'); 

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
        divElement.appendChild(percentageElement);

        // Append the parent div to the container
        container.appendChild(divElement);
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

// Function to generate and populate the table rows
function generateTransactionTableRows() {
    const tableBody = document.querySelector('#transaction-table tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Loop through the table data and generate rows
    transactionData.tableData.forEach(rowData => {
        
        const row = document.createElement('tr');

        let flag = 0;
        rowData.forEach((data, index) => {
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            const classesToAdd = [];
        
            if (index === 0) {
                classesToAdd.push('px-1.5', 'py-1', 'text-center');
            } else if (index === 1) {
                classesToAdd.push('px-8', 'py-1');
            } else if (index === 2 || index === 3) {
                classesToAdd.push('px-3', 'py-1', 'text-right');
            } else if (index === 4) {
                classesToAdd.push('px-3', 'py-1');
            } else if (index === 5) {
                classesToAdd.push('px-3', 'py-1', 'text-center');
                data.toLowerCase() === "buy" ? flag = 0 : flag = 1;
            } 
            else if (index === 6) {
                classesToAdd.push('px-3', 'py-1', 'text-center');
            }
            else if (index === 7) {
                classesToAdd.push('px-3', 'py-1', 'text-center');
            }
        
            cell.classList.add(...classesToAdd);

            // Add the generated classes to the cell
            cell.textContent = index === 0 ? data : (index === 7)? `` : data;

            if (index === 0) {
                // Generate random dark background color for the first cell
                const randomColor = getRandomDarkColor();
                cell.innerHTML = `<div class="bg-${randomColor} text-white dark:text-${randomColor}-200 font-semibold rounded-md mt-1 p-0.5">${data}</div>`;
            }
            else if (index == 5) {
                if(flag === 0){
                cell.innerHTML = `<div class= "bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5">BUY</div>`;
                } 
                else {
                cell.innerHTML = `<div class= "bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5">SELL</div>`;        
                }
            }
            else if (index == 7) {
                cell.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              `
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
generateTransactionTableRows();
generateTableRows();

// Generate portfolio chart
renderPortfolioAreaChart(mockData.chartData);

// MAX MASTI STARTS 
// This will do the tab switching for graph
// Get all tab links
const tabLinks = document.querySelectorAll('.tab-link');

// Add a click event listener to each tab link
tabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent the default link behavior (prevents page from scrolling)
        e.preventDefault();

        // Remove 'active' class from all tab links
        tabLinks.forEach((tab) => {
            tab.classList.remove('active-tab', 'text-blue-600', 'border-blue-600', 'dark:text-blue-500', 'dark:border-blue-500');
            tab.classList.add('hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300', 'border-transparent');
        });

        // Add 'active' class and selected tab styles to the clicked tab
        link.classList.add('active', 'text-blue-600', 'border-blue-600', 'dark:text-blue-500', 'dark:border-blue-500');
        link.classList.remove('hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300', 'border-transparent');

        // Here, you can implement your logic to handle tab switching
        // For example, you can update the content based on the selected tab

        // For demonstration, we'll just display the selected tab's ID in the console
        console.log('Selected Tab:', link.id);
    });
});

// Time notif under portfolio ka paisa
function updateLiveTime() {
    const liveTimeElement = document.getElementById('live-portfolio-time');
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZoneOffsetName: 'short'
    };
    const liveTime = new Date().toLocaleString('en-US', options);
    liveTimeElement.textContent = liveTime;
}

// Initial call to set the live time
updateLiveTime();

// Schedule updates every 30 seconds
setInterval(updateLiveTime, 30000); 


function generateCards(cardData) {
    const cardContainer = document.getElementById('cardContainer');

    // Clear existing cards
    cardContainer.innerHTML = '';

    // Loop through the card data and create cards
    cardData.forEach((data) => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('w-50', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'p-4', 'ml-2','mt-2', 'mr-2', 'text-left', 'shadow-md', 'h-32' );

        // Create and style the card header (Random Color Symbol and Short Name)
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('flex', 'items-center', 'mb-2');

        // Create and style the Random Color Symbol
        const symbol = document.createElement('div');
        const randomColor = getRandomDarkColor();
        symbol.innerHTML = `<div class="bg-${randomColor} text-white dark:text-${randomColor}-200 font-semibold rounded-md mt-1 p-1 text-center items-start">${data.symbol}</div>`;
        symbol.classList.add('w-14', 'h-7');

        // Create and style the Short Name
        const shortName = document.createElement('p');
        shortName.textContent = data.shortName || 'Short Name';
        shortName.classList.add('ml-2','mt-2', 'text-semibold', 'font-semibold');

        cardHeader.appendChild(symbol);
        cardHeader.appendChild(shortName);

        // Append the card header to the card
        card.appendChild(cardHeader);

        // Create and style the Price
        const price = document.createElement('p');
        price.textContent = data.price ? `$${data.price.toFixed(2)}` : '$100.00';
        price.classList.add('mt-2', 'text-semibold', 'font-semibold');

        // Create and style the Gain/Loss
        const gainLoss = document.createElement('div');
        data.direction === 'profit' ? gainLoss.classList.add('flex', 'flex-row', 'rounded-md', 'mt-1', 'w-fit', 'items-center', 'bg-green-200', 'text-green-500', 'h-7', 'pr-1', 'pl-1') : gainLoss.classList.add('flex', 'flex-row', 'rounded-md', 'mt-1', 'w-fit', 'items-center', 'bg-red-200', 'text-red-500', 'h-7', 'pr-1', 'pl-1');


        const svgTemplateId = data.direction === 'profit' ? 'suggestion-profit-arrow' : 'suggestion-loss-arrow';
        const svgTemplate = document.getElementById(svgTemplateId);
        const svgClone = document.importNode(svgTemplate.content, true);

        // Create and style the Percentage
        const percentage = document.createElement('p');
        percentage.textContent = `${data.percentageChange.toFixed(2)}%`;
        percentage.classList.add('ml-0.5', 'text-semibold', 'font-semibold');

        gainLoss.appendChild(svgClone);
        gainLoss.appendChild(percentage);

        // Append elements to the card
        card.appendChild(price);
        card.appendChild(gainLoss);

        // Append card to the container
        cardContainer.appendChild(card);
    });
}

// Example usage:
const cardData = [
    { direction: 'profit', percentageChange: 2.1, symbol: 'AAPL', shortName: 'Apple Inc.', price: 150.00 },
    { direction: 'loss', percentageChange: -1.5, symbol: 'GOOGL', shortName: 'Alphabet Inc.', price: 2750.00 },
    { direction: 'profit', percentageChange: 3.7, symbol: 'MSFT', shortName: 'Microsoft Corp.', price: 300.50 },
    { direction: 'profit', percentageChange: 1.2, symbol: 'AMZN', shortName: 'Amazon.com Inc.', price: 3500.00 },
    { direction: 'loss', percentageChange: -0.8, symbol: 'TSLA', shortName: 'Tesla Inc.', price: 720.00 }
];

generateCards(cardData);

