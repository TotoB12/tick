const express = require('express');
const app = express();
const path = require('path');
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env['API_KEY'];
const finnhubClient = new finnhub.DefaultApi();

let currentPrice = null;

const updatePrice = (symbol) => {
  finnhubClient.quote(symbol, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("new price");
      currentPrice = data.c;
    }
  });
};

updatePrice('NVDA');

setInterval(() => {
  updatePrice('NVDA');
}, 10000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/price', (req, res) => {
  res.send(`${currentPrice}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});