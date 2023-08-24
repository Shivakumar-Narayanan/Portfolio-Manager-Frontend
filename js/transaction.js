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
    if(json.transactionType == "BUY" ) color = "green";
    else color = "red";
    const html =`
      <tr>
        <td>${json.transactionDate}</td>
        <td>${json.stock.ticker}</td>
        <td>${json.stockCount}</td>
        <td>${json.stockPrice}</td>
        <td style=" color: ${color};" >${json.transactionType}</td>
      </tr>
    `
    return html;
  
  }
  
  
  
  
    