
const express = require('express');
const fs = require('fs');const app = express();

// Read quotes from JSON file
const quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

// Generate random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Route to serve a random quote
app.get('/', (req, res) => {
    const randomQuote = getRandomQuote();
    res.send(`<h1>${randomQuote.text}</h1><p>- ${randomQuote.author}</p>`);
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});