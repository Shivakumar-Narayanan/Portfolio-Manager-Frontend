export function displayTopGainers() {

    let url = "http://localhost:8083/portfolio/topGainers";
      fetch(url)
      .then(
          (response) => {
              if(response.ok) {
                  return response.json()
              }
              else{
                  throw new Error("No Data Found" + response.status)
              }
          }
          )
          .then(
              (data) => createTableBodyForGainer(data)
          )
          .catch(
              (error) => 
              { 
                  let html = `<td colspan='5'> ${error.message}`;
                  document.getElementById("gain/loseTableBody").innerHTML = html;
          }
          )
  }
  
  export function createTableBodyForGainer(data){
    let html =`
    <thead>
    <tr>    
        
        <th class="px-3 py-2 text-left text-gray-500">Name</th>
        <th class="px-3 py-2 text-right text-gray-500">Curr. Price</th>
        <th class="px-3 py-2 text-center text-gray-500">PL %</th>
    </tr>
    <tr>
        <td colspan="6" class="border-b border-gray-300 dark:border-gray-700"></td>
    </tr>
</thead>
<tbody>

    `;
    
    for(let i=0;i<data.length;i++){
      html += createRowForGainer(data[i]);
    }
    document.getElementById("gain/loseTableBody").innerHTML = html + "</tbody>";
  }
  
  export function createRowForGainer(json){
    let profit = (json.currentPricePerShare/json.buyPricePerShare)/100 -100;
    profit = profit.toFixed(2);
    let color = "";
    if(profit >= 0 ) color =" bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5";
    else color = " bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5";;
    
    let html =`
      <tr>
        <td class="px-4 py-1">${json.stock.name}</td>
        <td class="px-4 py-1 text-right">${json.currentPricePerShare}</td>
        <td class="px-4 py-1"><div class= ${color}>${profit}</div></td>
        
      </tr>
    `
    return html;
  
  }
  
  
  
//   Top loser
export function displayTopLosers() {

    let url = "http://localhost:8083/portfolio/topLosers";
      fetch(url)
      .then(
          (response) => {
              if(response.ok) {
                  return response.json()
              }
              else{
                  throw new Error("No Data Found" + response.status)
              }
          }
          )
          .then(
              (data) => createTableBodyForLoser(data)
          )
          .catch(
              (error) => 
              { 
                  let html = `<td colspan='5'> ${error.message}`;
                  document.getElementById("gain/loseTableBody").innerHTML = html;
          }
          )
  }
  
  export function createTableBodyForLoser(data){
    let html =`
    <thead>
    <tr>    
        
        <th class="px-3 py-2 text-left text-gray-500">Name</th>
        <th class="px-3 py-2 text-right text-gray-500">Curr. Price</th>
        <th class="px-3 py-2 text-center text-gray-500">PL %</th>
    </tr>
    <tr>
        <td colspan="6" class="border-b border-gray-300 dark:border-gray-700"></td>
    </tr>
</thead>
<tbody>

    `;
    
    for(let i=0;i<data.length;i++){
      html += createRowForLoser(data[i]);
    }
    document.getElementById("gain/loseTableBody").innerHTML = html + "</tbody>";
  }
  
  export function createRowForLoser(json){
    let profit = (json.currentPricePerShare/json.buyPricePerShare)/100 -100;
    profit = profit.toFixed(2);
    let color = "";
    if(profit >= 0 ) color =" bg-green-200 text-green-500 dark:text-green-400 font-semibold rounded-md mt-1 p-0.5";
    else color = " bg-red-200 text-red-500 dark:text-red-400 font-semibold rounded-md mt-1 p-0.5";;
    
    let html =`
      <tr>
        <td class="px-4 py-1">${json.stock.name}</td>
        <td class="px-4 py-1 text-right">${json.currentPricePerShare}</td>
        <td class="px-4 py-1"><div class= ${color}>${profit}</div></td>
        
      </tr>
    `
    return html;
  
  }
  
  
  
  
    
    