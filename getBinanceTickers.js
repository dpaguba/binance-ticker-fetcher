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

        await fs.writeFile('binance_tickers.txt', tradingPairs.join('\n'));

        console.log('Tickers successfully saved.');
    } catch (error) {
        console.error('Error fetching Trading Pairs:', error.message);
    }
}

getTradingPairs();
