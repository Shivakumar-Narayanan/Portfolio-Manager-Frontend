// Doing some modal magic
// Function to open the modal with data
export const openModalWithData = (data) => {
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