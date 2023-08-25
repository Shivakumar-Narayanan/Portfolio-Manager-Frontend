// Sample transaction data (replace this with your actual data)
const mockTransactionData = {
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

export const  generateTransactionTableRows = (transactionData = mockTransactionData) => {
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