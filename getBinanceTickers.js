import { get } from 'axios';
import { writeFileSync } from 'fs';
require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

// Binance API endpoint for Spot Trading Pairs
const endpoint = 'https://api.binance.com/api/v3/exchangeInfo';

async function getTradingPairs() {
    try {
        const response = await get(endpoint);
        const tradingPairs = response.data.symbols.map(pair => pair.symbol);

        writeFileSync('binance_tickers.txt', tradingPairs.join('\n'));

        console.log('Tickers successfully saved.');
    } catch (error) {
        console.error('Error fetching Trading Pairs:', error.message);
    }
}

getTradingPairs();
