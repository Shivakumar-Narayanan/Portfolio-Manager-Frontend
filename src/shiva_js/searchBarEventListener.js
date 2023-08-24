const listItems = []

export function addSearchBarEventListener() {

    const searchBar = document.getElementById("search-dropdown");
    console.log(searchBar);

    const processTypeAheadRequestDebounced = debounce(processTypeAheadRequest, 250);

    searchBar.addEventListener('input', e => processTypeAheadRequestDebounced(e))
}

const processTypeAheadRequest = (e) => {
    const searchQuery = e.target.value;

    const typeaheadUrl = "http://localhost:8083/stocks/typeAhead?q=" + searchQuery;

    // use the response from here to render type ahead requests
    fetch(typeaheadUrl).
        then(response => response.json()).
        then(response => {
            updateDataList(e, response)
        }); // <- this response will contain the typeahead results
}

export const updateDataList = (event, response) => {
    const datalist = document.getElementById("search-datalist");
    console.log(datalist);

    // first clear all the elements in the datalist
    while (datalist.firstChild) {
        datalist.removeChild(datalist.lastChild)
    }

    // iterating through the results and adding to the datalist
    response.forEach(elem => {
        const datalistElem = getDataListElem(elem);
        datalist.appendChild(datalistElem);
    });
}

const getDataListElem = (elem) => {
    const optionTemplate = document.getElementById("searchOptionTemplate");
    console.log(optionTemplate)
    const optionFragment = optionTemplate.content.cloneNode(true);
    console.log(optionFragment)
    // const option = optionFragment.querySelector('searchOption');
    const option = optionFragment.firstElementChild;
    console.log(option)
    const value = elem["stock"]["name"] + " (" + elem["stock"]["ticker"] + ")";
    option.value = value

    return option
}

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function updateCard(query) {

    const resultCard = document.getElementById('resultCard');

    const typeaheadUrl = "http://localhost:8083/stocks/typeAhead?q=" + query;

    // use the response from here to render type ahead requests
    fetch(typeaheadUrl).
        then(response => response.json()).
        then(response => {
            if (response.length > 0) {
                response.forEach((elem, index) => {
                    const item = elem["stock"]["name"] + " (" + elem["stock"]["ticker"] + ")";

                    const itemElement = document.createElement('div');
                    itemElement.textContent = item;
                    itemElement.classList.add('cursor-pointer', 'hover:text-blue-500', 'px-2', 'py-1');

                    itemElement.addEventListener('click', () => {
                        selectOption(index);
                    });

                    listItems.push(itemElement); // Add the item to the collection
                    resultCard.appendChild(itemElement);
                })

                // Update selected option index when the list is filtered
                if (selectedOptionIndex >= 0) {
                    selectedOptionIndex = filteredData.findIndex(item => item.name === staticData[selectedOptionIndex].name);
                }

                resultCard.classList.remove('invisible');
            }
            else {
                resultCard.innerHTML = 'No results found.';
                resultCard.classList.add('invisible');
            }
        });
}

// Event listener for input changes
// searchInput.addEventListener('input', () => {
//     const query = searchInput.value;
//     if (query.length > 0) {
//         updateCard(query);
//     } else {
//         resultCard.innerHTML = ''; // Clear the card when the input is empty
//         resultCard.classList.add('invisible');
//     }
// });

const processTypeAheadRequest2 = (e) => {
    const resultCard = document.getElementById('resultCard');

    const query = e.target.value;
    if (query.length > 0) {
        updateCard(query);
    } else {
        resultCard.innerHTML = ''; // Clear the card when the input is empty
        resultCard.classList.add('invisible');
    }
}
