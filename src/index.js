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

        // Sample data with 300 data points
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push(Math.floor(Math.random() * 1000));
        }
    
        // ApexCharts options and config
        window.addEventListener("load", function () {
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
            }
        });

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

// Function to select an option and populate the search bar
function selectOption(index) {
    const selectedOption = listItems[index];
    if (selectedOption) {
        searchInput.value = selectedOption.textContent;
        searchInput.classList.add('ring-blue-500', 'border-blue-500'); // Change the styling
        resultCard.classList.add('invisible');
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