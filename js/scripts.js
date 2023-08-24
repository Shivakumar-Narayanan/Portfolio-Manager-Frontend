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

// Function to populate the table with Transaction data
function populateTransactionTable() {
  
  let url = "http://localhost:8083/transaction/getAllTransactions";
    fetch(url)
    .then(
        (response) => {
            if(response.ok) {
                return response.json()
            }
            else{
                throw new Error("No Transaction Found" + response.status)
            }
        }
        )
        .then(
            (data) => createTableBodyForTransaction(data)
        )
        .catch(
            (error) => 
            { 
                let html = `<td colspan='9'> ${error.message}`;
                document.getElementById("transactionTableBody").innerHTML = html;
        }
        )
}

function createTableBodyForTransaction(data){
  html ="";
  for(let i=0;i<data.length;i++){
    html += createRowForTransaction(data[i]);
  }
  document.getElementById("transactionTableBody").innerHTML = html;
}

function createRowForTransaction(json){
  const html =`
    <tr>
      <td>${json.transactionDate}<td>
      <td>${json.stock.ticker}<td>
      <td>${json.stockCount}<td>
      <td>${json.stockPrice}<td>
      <td>${json.transactionType}<td>
    </tr>
  `
  return html;

}


function toggleTransaction() {
  const stockTable = document.getElementById("transactionTableBody");
  const toggleButton = document.getElementById("toggleTransactionButton");
  const tableHeader = document.getElementById("transactionTableHeader");

  if (stockTable.style.display === "none") {
      populateTransactionTable();
      stockTable.style.display = "table-row-group";
      toggleButton.innerText = "Transactions";
      tableHeader.style.display = "table-header-group";
  } else {
      stockTable.style.display = "none";
      toggleButton.innerText = "Transactions";
      tableHeader.style.display = "none";
  }
}

// Attach click event to the "Toggle Stocks" button
const toggleStocksButton = document.getElementById("toggleStocksButton");
toggleStocksButton.addEventListener("click", toggleStocks);

const toggleTransactionButton = document.getElementById("toggleTransactionButton");
toggleTransactionButton.addEventListener("click", toggleTransaction);


// const loadStocksButton = document.getElementById("loadStocksButton");
// loadStocksButton.addEventListener("click", populateStockTable);


// end of fucntion to implement the view stock list fucntionality

// ------------ portfolio chart------------------------------

 // Sample data
 var timeLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
 var portfolioWorth = [2500, 3500, 1100, 5750, 8500];

 // Get the canvas element
 var ctx = document.getElementById('portfolioChart').getContext('2d');

 // Create the chart
 var portfolioChart = new Chart(ctx, {
   type: 'line',
   data: {
     labels: timeLabels,
     datasets: [{
       label: 'Portfolio Worth',
       data: portfolioWorth,
       backgroundColor: 'rgba(75, 192, 192, 0.2)',
       borderColor: 'rgba(75, 192, 192, 1)',
       borderWidth: 2,
       pointRadius: 4,
       pointBackgroundColor: 'rgba(75, 192, 192, 1)',
       pointBorderColor: 'white',
       pointBorderWidth: 2
     }]
   },
   options: {
     responsive: true,
     maintainAspectRatio: false,
     scales: {
       y: {
         beginAtZero: true,
         title: {
           display: true,
           text: 'Portfolio Worth'
         }
       },
       x: {
         title: {
           display: true,
           text: 'Time'
         }
       }
     },
     plugins: {
       legend: {
         display: true,
         position: 'top'
       }
     }
   }
 });

// ------------------portfolio chart end -------------------------