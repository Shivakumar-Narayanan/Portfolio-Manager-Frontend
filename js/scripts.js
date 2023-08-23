// Get all the expandable rows
const expandableRows = document.querySelectorAll('.expandable-row');

// Attach click event listeners to the rows
expandableRows.forEach(row => {
  row.addEventListener('click', () => {
    const expandedContent = row.nextElementSibling;
    expandedContent.classList.toggle('expanded-content');
  });
});

const stocks = [
  { symbol: "AAPL", price: 150.25, stockCount: "+2.35" },
  { symbol: "GOOGL", price: 2760.50, stockCount: "-1.75" },
  { symbol: "AMZN", price: 3350.10, stockCount: "+0.90" },
  // ... more stock data
];

// Function to populate the table with stock data
function populateStockTable() {
  const stockTableBody = document.getElementById("stockTableBody");
  stockTableBody.innerHTML = ""; 

  stocks.forEach(stock => {

      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${stock.symbol}</td>
          <td>${stock.price}</td>
          <td>${stock.stockCount}</td>
      `;
      stockTableBody.appendChild(row);
  });
}


function toggleStocks() {
  const stockTable = document.getElementById("stockTableBody");
  const toggleButton = document.getElementById("toggleStocksButton");
  const tableHeader = document.getElementById("tableHeader");

  if (stockTable.style.display === "none") {
      populateStockTable();
      stockTable.style.display = "table-row-group";
      toggleButton.innerText = "Hide Stocks";
      tableHeader.style.display = "table-header-group";
  } else {
      stockTable.style.display = "none";
      toggleButton.innerText = "Show Stocks";
      tableHeader.style.display = "none";
  }
}

// Attach click event to the "Toggle Stocks" button
const toggleStocksButton = document.getElementById("toggleStocksButton");
toggleStocksButton.addEventListener("click", toggleStocks);

// const loadStocksButton = document.getElementById("loadStocksButton");
// loadStocksButton.addEventListener("click", populateStockTable);
