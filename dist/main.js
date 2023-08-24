/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shiva_js_searchBarEventListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shiva_js/searchBarEventListener.js */ \"./src/shiva_js/searchBarEventListener.js\");\n/* harmony import */ var _shiva_js_setupDataRefresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiva_js/setupDataRefresh.js */ \"./src/shiva_js/setupDataRefresh.js\");\n\r\n\r\n\r\n// startup\r\nconst addEventListeners = () => {\r\n    (0,_shiva_js_searchBarEventListener_js__WEBPACK_IMPORTED_MODULE_0__.addSearchBarEventListener)();\r\n}\r\n\r\naddEventListeners();\r\n\r\n(0,_shiva_js_setupDataRefresh_js__WEBPACK_IMPORTED_MODULE_1__.setupDataRefresh)();\r\n(0,_shiva_js_setupDataRefresh_js__WEBPACK_IMPORTED_MODULE_1__.setupRefresh10Seconds)();\r\n\r\n// Example data fetched from your Spring Boot REST API\r\nconst stockIndexesIndia = [\r\n    { direction: \"profit\", name: \"NIFTY 50\", totalPoints: 17990, percentageChange: 4.4, pointsLost: 34 },\r\n    { direction: \"loss\", name: \"Sensex\", totalPoints: 4500, percentageChange: -2.1, pointsLost: 95 }\r\n];\r\n\r\nconst stockIndexesWorld = [\r\n    { direction: \"profit\", name: \"Dow Jones\", totalPoints: 34000, percentageChange: 3.2, pointsLost: 58 },\r\n    { direction: \"profit\", name: \"NASDAQ\", totalPoints: 15000, percentageChange: 5.7, pointsLost: 72 },\r\n    { direction: \"loss\", name: \"FTSE 100\", totalPoints: 6500, percentageChange: -1.8, pointsLost: 48 },\r\n    { direction: \"profit\", name: \"Hang Seng\", totalPoints: 26000, percentageChange: 2.6, pointsLost: 68 }\r\n];\r\n\r\nfunction createStockIndexCard(indexData) {\r\n    const cardContainer = document.getElementById('stockIndexContainer');\r\n\r\n    // Create the card div element\r\n    const card = document.createElement('div');\r\n    card.className = 'bg-white ml-2 mt-2 w-48 p-1 pr-7 rounded-lg shadow-md flex flex-row';\r\n\r\n    // Left Section (1:6 ratio)\r\n    const leftSection = document.createElement('div');\r\n    leftSection.className = indexData.direction === 'profit' ? 'w-1/7 flex flex-col justify-center rounded-md items-center bg-green-200 mt-3 mb-3 pr-1 pl-1' : 'w-1/7 flex flex-col justify-center rounded-md items-center bg-red-200 mt-3 mb-3 pr-1 pl-1'\r\n\r\n    // Use the appropriate template based on the direction\r\n    const arrowTemplate = document.getElementById(indexData.direction === 'profit' ? 'profit-arrow' : 'loss-arrow');\r\n    if (arrowTemplate) {\r\n        // Clone the template content and append it to the left section\r\n        const arrowIcon = document.importNode(arrowTemplate.content, true);\r\n        leftSection.appendChild(arrowIcon);\r\n    }\r\n\r\n    // Right Section (6:1 ratio)\r\n    const rightSection = document.createElement('div');\r\n    rightSection.className = 'w-6/7 flex flex-between justify-center';\r\n\r\n    // Stock index details\r\n    const stockDetails = document.createElement('div');\r\n    stockDetails.className = 'w-3/4 p-2';\r\n\r\n    const indexName = document.createElement('p');\r\n    indexName.className = 'text-black text-sm font-semibold';\r\n    indexName.textContent = indexData.name;\r\n\r\n    const indexTotalPoints = document.createElement('p');\r\n    indexTotalPoints.className = 'text-black text-sm font-normal';\r\n    indexTotalPoints.textContent = indexData.totalPoints.toLocaleString();\r\n\r\n    stockDetails.appendChild(indexName);\r\n    stockDetails.appendChild(indexTotalPoints);\r\n\r\n    // Percentage change and points lost\r\n    const changeDetails = document.createElement('div');\r\n    changeDetails.className = 'w-1/4 p-2';\r\n\r\n    const percentageChange = document.createElement('p');\r\n    percentageChange.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-semibold' : 'text-red-500 text-sm font-semibold';\r\n    percentageChange.textContent = indexData.percentageChange + '%';\r\n\r\n    const pointsLost = document.createElement('p');\r\n    pointsLost.className = indexData.direction === 'profit' ? 'text-green-500 text-sm font-normal' : 'text-red-500 text-sm font-normal';\r\n    pointsLost.textContent = indexData.pointsLost + 'pts';\r\n\r\n    changeDetails.appendChild(percentageChange);\r\n    changeDetails.appendChild(pointsLost);\r\n\r\n    // Append sections to the card\r\n    rightSection.appendChild(stockDetails);\r\n    rightSection.appendChild(changeDetails);\r\n    card.appendChild(leftSection);\r\n    card.appendChild(rightSection);\r\n\r\n    // Append the card to the container\r\n    cardContainer.appendChild(card);\r\n}\r\n\r\n// // Loop through the stock index data and create cards\r\n// stockIndexes.forEach((indexData) => {\r\n//     createStockIndexCard(indexData);\r\n// });\r\n\r\n\r\n// Function to display India-specific cards\r\nfunction displayIndiaStockIndexes() {\r\n    const cardContainer = document.getElementById('stockIndexContainer');\r\n    cardContainer.innerHTML = ''; // Clear existing cards\r\n\r\n    // Loop through India-specific stock index data and create cards\r\n    stockIndexesIndia.forEach((indexData) => {\r\n        createStockIndexCard(indexData);\r\n    });\r\n\r\n    // Toggle tab styles\r\n    const indiaTab = document.getElementById('indiaTab');\r\n    const worldTab = document.getElementById('worldTab');\r\n    indiaTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');\r\n    indiaTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');\r\n    worldTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');\r\n    worldTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');\r\n}\r\n\r\n// Function to display Rest of World-specific cards\r\nfunction displayWorldStockIndexes() {\r\n    const cardContainer = document.getElementById('stockIndexContainer');\r\n    cardContainer.innerHTML = ''; // Clear existing cards\r\n\r\n    // Loop through Rest of World-specific stock index data and create cards\r\n    stockIndexesWorld.forEach((indexData) => {\r\n        createStockIndexCard(indexData);\r\n    });\r\n\r\n    // Toggle tab styles\r\n    const indiaTab = document.getElementById('indiaTab');\r\n    const worldTab = document.getElementById('worldTab');\r\n    worldTab.classList.add('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');\r\n    worldTab.classList.remove('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');\r\n    indiaTab.classList.remove('text-blue-600', 'bg-gray-100', 'active', 'dark:bg-gray-800', 'dark:text-blue-500');\r\n    indiaTab.classList.add('hover:text-gray-600', 'hover:bg-gray-50', 'dark:hover:bg-gray-800', 'dark:hover:text-gray-300');\r\n}\r\n\r\n// Event listeners for tab buttons\r\nconst indiaTab = document.getElementById('indiaTab');\r\nconst worldTab = document.getElementById('worldTab');\r\n\r\nindiaTab.addEventListener('click', () => {\r\n    displayIndiaStockIndexes();\r\n});\r\n\r\nworldTab.addEventListener('click', () => {\r\n    displayWorldStockIndexes();\r\n});\r\n\r\n// Initially, display India-specific cards by default\r\ndisplayIndiaStockIndexes();\r\n\r\n\n\n//# sourceURL=webpack://portfolio-manager-frontend/./src/index.js?");

/***/ }),

/***/ "./src/shiva_js/chartUtil.js":
/*!***********************************!*\
  !*** ./src/shiva_js/chartUtil.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateChart: () => (/* binding */ updateChart)\n/* harmony export */ });\nconst updateChart = (chart, chartId, url, startDate, endDate) => {\r\n    const data = [];\r\n\r\n    fetch(url).then(response => response.json()).then(response => {\r\n\r\n        const responselen = response.length;\r\n        for (let i = 0; i < responselen; i++) {\r\n            const item = response[i];\r\n            const x = item[\"key\"]\r\n            const y = item[\"value\"]\r\n\r\n            const obj = {\r\n                x: x,\r\n                y: y\r\n            }\r\n\r\n            data.push(obj)\r\n        }\r\n\r\n        if (data.length > 0) {\r\n            if (document.getElementById(chartId) && typeof ApexCharts !== 'undefined') {\r\n                chart.updateOptions({\r\n                        series: [\r\n                            {\r\n                                data: data,\r\n                            },\r\n                        ]\r\n                    }\r\n                );\r\n            }\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://portfolio-manager-frontend/./src/shiva_js/chartUtil.js?");

/***/ }),

/***/ "./src/shiva_js/searchBarEventListener.js":
/*!************************************************!*\
  !*** ./src/shiva_js/searchBarEventListener.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSearchBarEventListener: () => (/* binding */ addSearchBarEventListener),\n/* harmony export */   updateDataList: () => (/* binding */ updateDataList)\n/* harmony export */ });\nconst listItems = []\r\n\r\nfunction addSearchBarEventListener() {\r\n\r\n    const searchBar = document.getElementById(\"search-dropdown\");\r\n    console.log(searchBar);\r\n\r\n    const processTypeAheadRequestDebounced = debounce(processTypeAheadRequest, 250);\r\n\r\n    searchBar.addEventListener('input', e => processTypeAheadRequestDebounced(e))\r\n}\r\n\r\nconst processTypeAheadRequest = (e) => {\r\n    const searchQuery = e.target.value;\r\n\r\n    const typeaheadUrl = \"http://localhost:8083/stocks/typeAhead?q=\" + searchQuery;\r\n\r\n    // use the response from here to render type ahead requests\r\n    fetch(typeaheadUrl).\r\n        then(response => response.json()).\r\n        then(response => {\r\n            updateDataList(e, response)\r\n        }); // <- this response will contain the typeahead results\r\n}\r\n\r\nconst updateDataList = (event, response) => {\r\n    const datalist = document.getElementById(\"search-datalist\");\r\n    console.log(datalist);\r\n\r\n    // first clear all the elements in the datalist\r\n    while (datalist.firstChild) {\r\n        datalist.removeChild(datalist.lastChild)\r\n    }\r\n\r\n    // iterating through the results and adding to the datalist\r\n    response.forEach(elem => {\r\n        const datalistElem = getDataListElem(elem);\r\n        datalist.appendChild(datalistElem);\r\n    });\r\n}\r\n\r\nconst getDataListElem = (elem) => {\r\n    const optionTemplate = document.getElementById(\"searchOptionTemplate\");\r\n    console.log(optionTemplate)\r\n    const optionFragment = optionTemplate.content.cloneNode(true);\r\n    console.log(optionFragment)\r\n    // const option = optionFragment.querySelector('searchOption');\r\n    const option = optionFragment.firstElementChild;\r\n    console.log(option)\r\n    const value = elem[\"stock\"][\"name\"] + \" (\" + elem[\"stock\"][\"ticker\"] + \")\";\r\n    option.value = value\r\n\r\n    return option\r\n}\r\n\r\nfunction debounce(func, timeout = 300) {\r\n    let timer;\r\n    return (...args) => {\r\n        clearTimeout(timer);\r\n        timer = setTimeout(() => { func.apply(this, args); }, timeout);\r\n    };\r\n}\r\n\r\nfunction updateCard(query) {\r\n\r\n    const resultCard = document.getElementById('resultCard');\r\n\r\n    const typeaheadUrl = \"http://localhost:8083/stocks/typeAhead?q=\" + query;\r\n\r\n    // use the response from here to render type ahead requests\r\n    fetch(typeaheadUrl).\r\n        then(response => response.json()).\r\n        then(response => {\r\n            if (response.length > 0) {\r\n                response.forEach((elem, index) => {\r\n                    const item = elem[\"stock\"][\"name\"] + \" (\" + elem[\"stock\"][\"ticker\"] + \")\";\r\n\r\n                    const itemElement = document.createElement('div');\r\n                    itemElement.textContent = item;\r\n                    itemElement.classList.add('cursor-pointer', 'hover:text-blue-500', 'px-2', 'py-1');\r\n\r\n                    itemElement.addEventListener('click', () => {\r\n                        selectOption(index);\r\n                    });\r\n\r\n                    listItems.push(itemElement); // Add the item to the collection\r\n                    resultCard.appendChild(itemElement);\r\n                })\r\n\r\n                // Update selected option index when the list is filtered\r\n                if (selectedOptionIndex >= 0) {\r\n                    selectedOptionIndex = filteredData.findIndex(item => item.name === staticData[selectedOptionIndex].name);\r\n                }\r\n\r\n                resultCard.classList.remove('invisible');\r\n            }\r\n            else {\r\n                resultCard.innerHTML = 'No results found.';\r\n                resultCard.classList.add('invisible');\r\n            }\r\n        });\r\n}\r\n\r\n// Event listener for input changes\r\n// searchInput.addEventListener('input', () => {\r\n//     const query = searchInput.value;\r\n//     if (query.length > 0) {\r\n//         updateCard(query);\r\n//     } else {\r\n//         resultCard.innerHTML = ''; // Clear the card when the input is empty\r\n//         resultCard.classList.add('invisible');\r\n//     }\r\n// });\r\n\r\nconst processTypeAheadRequest2 = (e) => {\r\n    const resultCard = document.getElementById('resultCard');\r\n\r\n    const query = e.target.value;\r\n    if (query.length > 0) {\r\n        updateCard(query);\r\n    } else {\r\n        resultCard.innerHTML = ''; // Clear the card when the input is empty\r\n        resultCard.classList.add('invisible');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio-manager-frontend/./src/shiva_js/searchBarEventListener.js?");

/***/ }),

/***/ "./src/shiva_js/setupDataRefresh.js":
/*!******************************************!*\
  !*** ./src/shiva_js/setupDataRefresh.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupDataRefresh: () => (/* binding */ setupDataRefresh),\n/* harmony export */   setupRefresh10Seconds: () => (/* binding */ setupRefresh10Seconds)\n/* harmony export */ });\n/* harmony import */ var _chartUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartUtil.js */ \"./src/shiva_js/chartUtil.js\");\n/* harmony import */ var _updatePortfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePortfolio.js */ \"./src/shiva_js/updatePortfolio.js\");\n\r\n\r\n\r\nvar portfolioChart;\r\n\r\nconst setupDataRefresh = () => {\r\n    refreshData();\r\n    var intervalId = setInterval(refreshData, 5000);\r\n}\r\n\r\nconst setupRefresh10Seconds = () => {\r\n    initializePortfolioChart();\r\n    RefreshData10Seconds();\r\n    var intervalId = setInterval(RefreshData10Seconds, 10000);\r\n}\r\n\r\nconst refreshData = () => {\r\n    updatePortfolio();\r\n}\r\n\r\nconst RefreshData10Seconds = () => {\r\n    refreshGraph();\r\n}\r\n\r\nconst updatePortfolio = () => {\r\n    updateTotalPortfolioValue();\r\n\r\n    updateProfitLossPercentage();\r\n\r\n    (0,_updatePortfolio_js__WEBPACK_IMPORTED_MODULE_1__.updatePortfolioList)();\r\n}\r\n\r\nconst updateTotalPortfolioValue = () => {\r\n    const totalPortfolioValuePlaceHolder = document.getElementById(\"totalPortfolioValue\");\r\n    const totalPortfolioValueUrl = \"http://localhost:8083/portfolio/currentTotalAmount\";\r\n    fetch(totalPortfolioValueUrl).then(response => response.json()).then(response => totalPortfolioValuePlaceHolder.innerHTML = response);\r\n}\r\n\r\nconst updateProfitLossPercentage = () => {\r\n    const profitLossPercentagePlaceholder = document.getElementById(\"profitLossPercentage\");\r\n    const profitLossPercentageUrl = \"http://localhost:8083/portfolio/profitLossPercentage\";\r\n    fetch(profitLossPercentageUrl).then(response => response.json()).then(response => profitLossPercentagePlaceholder.innerHTML = response);\r\n}\r\n\r\nconst refreshGraph = () => {\r\n\r\n    const startDate = '2017-01-01'\r\n    const endDate = '2023-08-24';\r\n    const valueOverTimeUrl = \"http://localhost:8083/portfolio/portfolioValueOverTime?startDate=\" + startDate + \"&endDate=\" + endDate;\r\n\r\n    (0,_chartUtil_js__WEBPACK_IMPORTED_MODULE_0__.updateChart)(portfolioChart, \"area-chart\", valueOverTimeUrl, setupDataRefresh, endDate);\r\n}\r\n\r\nconst initializePortfolioChart = () => {\r\n    // ApexCharts options and config\r\n    const data = []\r\n\r\n    let options = {\r\n        chart: {\r\n            height: \"400\", // Adjust the height here\r\n            width: \"800\", // Adjust the width here\r\n            type: \"area\",\r\n            fontFamily: \"Inter, sans-serif\",\r\n            dropShadow: {\r\n                enabled: false,\r\n            },\r\n            toolbar: {\r\n                show: false,\r\n            },\r\n        },\r\n        tooltip: {\r\n            enabled: true,\r\n            x: {\r\n                show: false,\r\n            },\r\n        },\r\n        fill: {\r\n            type: \"gradient\",\r\n            gradient: {\r\n                opacityFrom: 0.55,\r\n                opacityTo: 0,\r\n                shade: \"#5fba77\",\r\n                gradientToColors: [\"#5fba77\"],\r\n            },\r\n        },\r\n        dataLabels: {\r\n            enabled: false,\r\n        },\r\n        stroke: {\r\n            width: 2, // Adjust the line thickness here\r\n        },\r\n        grid: {\r\n            show: false,\r\n            strokeDashArray: 4,\r\n            padding: {\r\n                left: 2,\r\n                right: 2,\r\n                top: 0,\r\n            },\r\n        },\r\n        series: [\r\n            {\r\n                name: \"Stock Data\",\r\n                data: data,\r\n                color: \"#5fba77\",\r\n            },\r\n        ],\r\n        xaxis: {\r\n            categories: data.map((currentValue) => currentValue.y),\r\n            labels: {\r\n                show: true,\r\n            },\r\n            axisBorder: {\r\n                show: false,\r\n            },\r\n            axisTicks: {\r\n                show: false,\r\n            },\r\n        },\r\n        yaxis: {\r\n            show: true,\r\n        },\r\n    };\r\n\r\n    if (document.getElementById(\"area-chart\") && typeof ApexCharts !== 'undefined') {\r\n        const chart = new ApexCharts(document.getElementById(\"area-chart\"), options);\r\n        chart.render();\r\n        portfolioChart = chart;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio-manager-frontend/./src/shiva_js/setupDataRefresh.js?");

/***/ }),

/***/ "./src/shiva_js/updatePortfolio.js":
/*!*****************************************!*\
  !*** ./src/shiva_js/updatePortfolio.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updatePortfolioList: () => (/* binding */ updatePortfolioList)\n/* harmony export */ });\nconst updatePortfolioList = () => {\r\n    const portfolioListUrl = \"http://localhost:8083/portfolio/currentPortfolio\";\r\n    const portfolioList = document.getElementById(\"portfolioList\");\r\n\r\n    const listElements = portfolioList.children;\r\n\r\n    fetch(portfolioListUrl).then(response => response.json()).then(response => {\r\n\r\n        const numStocks = response[\"stocksSnapshots\"].length;\r\n\r\n        const portfolio2DArray = []\r\n\r\n        for (let i = 0; i < numStocks; i++) {\r\n            const stock = response[\"stocksSnapshots\"][i];\r\n\r\n            const profitLoss = stock[\"currentTotalAmount\"] - stock[\"totalBuyAmount\"]\r\n            const profitLossPercentage = convertTo2DecimalPlaces((profitLoss * 100) / stock[\"totalBuyAmount\"])\r\n            const avgBuyPrice = convertTo2DecimalPlaces(stock[\"buyPricePerShare\"])\r\n            const totalInvested = convertTo2DecimalPlaces(stock[\"totalBuyAmount\"])\r\n\r\n            const row = [\r\n                stock[\"stock\"][\"ticker\"],\r\n                stock[\"stock\"][\"name\"],\r\n                avgBuyPrice,\r\n                stock[\"currentPricePerShare\"],\r\n                stock[\"quantity\"],\r\n                totalInvested,\r\n                stock[\"currentTotalAmount\"],\r\n                profitLoss,\r\n                profitLossPercentage\r\n            ]\r\n\r\n            portfolio2DArray.push(row)\r\n        }\r\n\r\n        // portfolio2DArray can now be fed into the ui\r\n    })\r\n\r\n    const convertTo2DecimalPlaces = (d) => {\r\n        return d.toFixed(2);\r\n    }\r\n}\n\n//# sourceURL=webpack://portfolio-manager-frontend/./src/shiva_js/updatePortfolio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;