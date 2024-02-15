const axios = require('axios');
const fs = require('fs').promises;
require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

const endpoint = 'https://api.binance.com/api/v3/exchangeInfo';

async function getTradingPairs() {
    try {
        const response = await axios.get(endpoint);
        const tradingPairs = response.data.symbols.map(pair => pair.symbol);

        //Define the quote currencies you want to use
        const quoteCurrencies = ["USDT"];

        getTickers(tradingPairs, quoteCurrencies);

        console.log('Tickers successfully saved.');
    } catch (error) {
        console.error('Error fetching Trading Pairs:', error.message);
    }
}

function getTickers(tradingPairs, quoteCurrencies) {
    const allPairs = [];

    for (let i = 0; i < quoteCurrencies.length; i++) {
        const filteredPairs = tradingPairs.filter(pair => pair.endsWith(quoteCurrencies[i]));
        allPairs.push(...filteredPairs);
    }

    fs.writeFile("binance_tickers.txt", allPairs.join('\n'))
        .then(() => console.log(`All tickers successfully saved in ${"binance_tickers.txt"}.`))
        .catch(error => console.error('Error saving tickers:', error.message));
}

getTradingPairs();
