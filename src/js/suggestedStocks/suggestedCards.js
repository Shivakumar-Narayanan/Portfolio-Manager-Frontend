import { getRandomDarkColor } from "../util/generateRandomDarkColor";

// Example usage:
const cardDataMock = [
    { direction: 'profit', percentageChange: 2.1, symbol: 'AAPL', shortName: 'Apple Inc.', price: 150.00 },
    { direction: 'loss', percentageChange: -1.5, symbol: 'GOOGL', shortName: 'Alphabet Inc.', price: 2750.00 },
    { direction: 'profit', percentageChange: 3.7, symbol: 'MSFT', shortName: 'Microsoft Corp.', price: 300.50 },
    { direction: 'profit', percentageChange: 1.2, symbol: 'AMZN', shortName: 'Amazon.com Inc.', price: 3500.00 },
    { direction: 'loss', percentageChange: -0.8, symbol: 'TSLA', shortName: 'Tesla Inc.', price: 720.00 }
];

export const generateCards = (cardData=cardDataMock) => {
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