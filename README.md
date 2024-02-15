# 📈 Binance Ticker Fetcher 📊

Binance Ticker Fetcher is a Node.js script that fetches trading pairs from the Binance API and saves them to a text file based on specified quote currencies.

## 🚀 How It Works

The script uses the Binance API to retrieve a list of trading pairs. It then filters the pairs based on predefined quote currencies, and the resulting pairs are saved to a text file named `binance_tickers.txt`.

## 🛠️ Tech Stack

- Node.js
- Axios for making HTTP requests
- dotenv for handling environment variables
- fs.promises for file system operations

## 📋 How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/binance-ticker-fetcher.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Binance API key and secret:

   ```
   API_KEY=your_api_key
   API_SECRET=your_api_secret
   ```

4. Modify the script to specify the quote currencies you are interested in:

   ```javascript
   //Define the quote currencies you want to use
   const quoteCurrencies = ["USDT", "BTC", "ETH"];
   ```

5. Run the script:

   ```bash
   node getBinanceTickers.js
   ```

6. Check the output in the console and find the generated `binance_tickers.txt` file with the tickers.

## 🌟 Start the Project

To start the project, follow the steps outlined in the "How to Use" section. Make sure to provide your Binance API key and secret in the `.env` file.

Feel free to customize the script based on your specific requirements or use it as a starting point for further development. Happy trading! 🚀
