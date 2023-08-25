export const makeTransaction = (price, quantity, date, type) => {
    const stockNameElement = document.getElementById('modal-stock-name');
    const fullStockName = stockNameElement.textContent;

    const ticker = fullStockName.substring(fullStockName.indexOf("(") + 1, fullStockName.indexOf(")"));

    var requestData = {
        "transactionDate": date,
        "stock": {
            "ticker": ticker
        },
        "stockCount": quantity,
        "stockPrice": price,
        "user": {
            "userId": 0
        },
        "transactionType": type
    };

    var fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };

    const url = "http://localhost:8083/transaction/addTransaction";

    fetch(url, fetchOptions)
    .then(response => {

        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || "Bad Request");
            });
        }

        response.json()
    })
    .then(data => {
        alert("transaction created")
    })
    .catch(error => {
        alert(error)
    });
}