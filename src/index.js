import { addSearchBarEventListener } from "./shiva_js/searchBarEventListener.js";
import { setupDataRefresh, setupRefresh10Seconds } from "./shiva_js/setupDataRefresh.js";

// startup
const addEventListeners = () => {
    addSearchBarEventListener();
}

addEventListeners();

setupDataRefresh();
setupRefresh10Seconds();

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

