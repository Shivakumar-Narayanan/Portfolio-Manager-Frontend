// ------------------------------------------------------------------------

import { openModalWithData } from "../modal/modal.js";

let areaChartInstance = null;

//Section        
// Search bar things
const searchInput = document.getElementById('default-search');
const resultCard = document.getElementById('resultCard');
const dataList = document.getElementById('stock-options'); // Datalist element

// Sample data with 300 data points
const mockChartData = [];
for (let i = 0; i < 100; i++) {
    mockChartData.push(Math.floor(Math.random() * 1000));
}

// Static data for demonstration (replace with your own data)
const staticData = [
    { name: 'Apple Inc.', ticker: 'AAPL' },
    { name: 'Microsoft Corporation', ticker: 'MSFT' },
    { name: 'Amazon.com Inc.', ticker: 'AMZN' },
    { name: 'Google LLC', ticker: 'GOOGL' },
    { name: 'Facebook, Inc.', ticker: 'META' },
    { name: 'Tesla, Inc.', ticker: 'TSLA' },
    { name: 'Walmart', ticker: 'WMT'}
];

let selectedOptionIndex = -1; // Initialize as -1 (no selection)

// Collection of list items
const listItems = [];

// -------------------------------------------------------------------------------

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

// Function to update the card with static data
function updateCard(query) {
    const filteredData = staticData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.ticker.toLowerCase().includes(query.toLowerCase()));
    if (filteredData.length > 0) {
        resultCard.innerHTML = '';
        listItems.length = 0; // Clear the list of items

        filteredData.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.textContent = item.name + " (" + item.ticker + ")";
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

// ------------------------------------------------------------------------



// This will be used by the popup charts
export const renderStockAreaChart = (data) => {
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
                data: data.map((currentValue) => parseInt(currentValue.value)),
                color: "#5fba77",
            },
        ],
        xaxis: {
            categories: data.map((currentValue) => currentValue.key),
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
    if (!areaChartInstance) {
        // If it doesn't exist, create a new chart instance
        if (document.getElementById("modal-area-chart") && typeof ApexCharts !== 'undefined') {
            areaChartInstance = new ApexCharts(document.getElementById("modal-area-chart"), options);
            areaChartInstance.render();
        }
    } else {
        areaChartInstance.updateOptions({
            series: [
                {
                    name: "Stock Data",
                    data: data.map((currentValue) => parseInt(currentValue.value))
                },
            ],
            xaxis: {
                categories: data.map((currentValue) => currentValue.key)
            }
        }
    );
    }
}


// Function to select an option and populate the search bar
function selectOption(index) {
    const selectedOption = listItems[index];
    if (selectedOption) {
        searchInput.value = selectedOption.textContent;
        searchInput.classList.add('ring-blue-500', 'border-blue-500'); // Change the styling
        resultCard.classList.add('invisible');

        initiateStockPopup(selectedOption)
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

export const doNothing = () => {

}

// -------------------------------------------------------------------

const initiateStockPopup = (selectedOption) => {
    // Create a mock data object for the selected stock (replace with actual data)

    const name = selectedOption.textContent.substring(0, selectedOption.textContent.indexOf("(")).trim();
    const ticker = selectedOption.textContent.substring(selectedOption.textContent.indexOf("(") + 1, selectedOption.textContent.indexOf(")"));

    console.log(name)
    console.log(ticker)

    generateStockPopupGraph(name, ticker);

}

export const generateStockPopupGraph = (name, ticker) => {
    const stockDataUrl = "http://localhost:8083/market/stockValueOverTime?startDate=2022-01-01&endDate=2023-08-25&ticker=AAPL";
    const stockPriceUrl = "http://localhost:8083/market/stockQuote?ticker=" + ticker;

    fetch(stockDataUrl).then(response => response.json()).then(
        stockData => {

            fetch(stockPriceUrl).then(response => response.json()).then(
                stockPrice => {

                    const mockChartData = {
                        stockName: name + " (" + ticker + ")",
                        profitLoss: stockPrice,
                        profitLossPercent: '+2.1%',
                        chartData: stockData
                    }

                    // Open the modal with the selected data
                    openModalWithData(mockChartData);
                    console.log("SOption, After Open, Before Render");
                    // Render the chart in the modal
                    renderStockAreaChart(mockChartData.chartData); // Replace with the actual chart data
                    console.log("SOption, After Render");
                }
            )

        }
    );
}