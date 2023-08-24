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
                  let html = `<td colspan='5'> ${error.message}`;
                  document.getElementById("transactionTableBody").innerHTML = html;
          }
          )
  }
  
   function createTableBodyForTransaction(data){
    let html ="";
    for(let i=0;i<data.length;i++){
      html += createRowForTransaction(data[i]);
    }
    document.getElementById("transactionTableBody").innerHTML = html;
  }
  
   function createRowForTransaction(json){
    let color=""
    if(json.transactionType == "BUY" ) color =" bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5";
    else color = " bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5";
    const html =`
      <tr>
        
        <td class="px-1 py-1 text-left"><div class=" bg-blue-800 text-white dark:text-blue-200 font-semibold rounded-md mt-12 p-0.5">
        ${json.stock.ticker}
        </div></td>

        <td class="px-5 py-1 text-center">${json.stock.name}</td>
        <td class="px-3 py-1 text-right">${json.stockPrice}</td>
        <td class="px-3 py-1 text-center">${json.stockCount}</td>
        <td class="px-4 py-1"><div class= ${color}>${json.transactionType}</div></td>
        <td class="px-6 py-1">${json.transactionDate}</td>
        <td class="px-2 py-1"><button id="delete" onclick="deleteTransaction(${json.transactionId})">Delete</button></td>
      </tr>
    `
    return html;
  
  }
  
  
  function deleteTransaction(id){
    
    const jsonObject = { ["transactionId"]: id };
    console.log(id);
    console.log(jsonObject);
    const json = JSON.stringify(jsonObject)
    console.log(json);
    const url = "http://localhost:8083/transaction/deleteTransaction"
    fetch(url, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: json
    })
    .then(
      ( response ) => {
        if ( response.ok ) {
          console.log("Success");
          location.reload();
        } else {
          throw new Error( "HTTP Response Status " + response.status );
        }
      } )
      .catch(
        ( error ) => {
          console.log(error.message);
        }
      );

  }
  
    