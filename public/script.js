const stockSymbolInput = document.getElementById('stockSymbol');
const submitButton = document.getElementById('submitButton');
const priceDisplay = document.getElementById('priceDisplay');

let currentSymbol = 'NVDA';

document.title = currentSymbol;

const updatePrice = () => {
  fetch('/price')
    .then(response => response.text())
    .then(data => {
      priceDisplay.textContent = `$${data}`;
    })
    .catch(error => {
      console.error('Error fetching price:', error);
    });
};

updatePrice();

setInterval(updatePrice, 10000);