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
export const displayGainerStocks = () => {
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