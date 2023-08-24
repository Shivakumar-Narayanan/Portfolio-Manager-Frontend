function chart() {
    // const stock = "GOOG"
    // const today = new Date();
    // let startDate=""
    // if (time == 24) {
    //     startDate = new Date();
    //     startDate.setHours(0, 0, 0, 0);
    // }
    // else if(time=="1M"){
    //     startDate = new Date(today);
    //     startDate.setMonth(today.getMonth() - 1);
    // }

    // startDate.setHours(0, 0, 0, 0);
    // today.setHours(0, 0, 0, 0);
    
    // const startTimestamp = Math.round(startDate.getTime() / 1000);
    // const endTimestamp = Math.round(today.getTime() / 1000);
    const apiUrl = `https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker=TSLA`;

    fetch(apiUrl)
    .then(
        (response) => {
            if(response.ok) {
                return response.text()
            }
            else{
                throw new Error("No Transaction Found" + response.status)
            }
        }
        )
        .then(
        (data) => document.getElementById("demoPrinting").innerHTML = data
    )

    
}