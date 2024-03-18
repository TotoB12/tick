const priceDisplay = document.getElementById("priceDisplay");

let currentSymbol = "NVDA";

document.title = currentSymbol;

const updatePrice = () => {
  fetch("/price")
    .then((response) => response.text())
    .then((data) => {
      priceDisplay.textContent = `$${data}`;
      document.title = `$${data}`;
    })
    .catch((error) => {
      console.error("Error fetching price:", error);
    });
};

updatePrice();

setInterval(updatePrice, 10000);

function disableTextSelection() {
    document.body.setAttribute('unselectable', 'on');
    document.body.style.userSelect = 'none';
    document.body.style.MozUserSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

disableTextSelection();

