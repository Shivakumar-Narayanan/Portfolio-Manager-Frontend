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
    let color=""
    if(json.transactionType == "BUY" ) color =" bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5";
    else color = " bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5";;
    const html =`
      <tr>
        
        <td class="px-2 py-1 text-center"><div class=" bg-blue-800 text-white dark:text-blue-200 font-semibold rounded-md mt-12 p-0.5">
        ${json.stock.ticker}
        </div></td>

        <td class="px-10 py-1">${json.stock.name}</td>
        <td class="px-4 py-1 text-right">${json.stockPrice}</td>
        <td class="px-4 py-1">${json.stockCount}</td>
        <td class="px-4 py-1"><div class= ${color}>${json.transactionType}</div></td>
        <td class="px-4 py-1">${json.transactionDate}</td>
      </tr>
    `
    return html;
  
  }
  
  
  
  
    