import { makeTransaction } from "./transaction.js";

const saveButton = document.getElementById("saveButton");

const quantityElem = document.getElementById("quantity");
const datePicker = document.getElementById("datePicker");
const priceElem = document.getElementById("priceValue")
const buySellElem = document.getElementById("buy-sell");

export const addSaveButtonEventListener = () => {
    saveButton.addEventListener('click', (e) => {
        makeTransaction(priceElem.value, quantityElem.value, datePicker.value, buySellElem.value);
    })
}