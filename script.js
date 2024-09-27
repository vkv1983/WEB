// Quote API or quote database
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    // Add more quotes here
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteHTML = `
        <blockquote>
            <p>${quote.text}</p>
            <footer>${quote.author}</footer>
        </blockquote>
    `;
    document.getElementById("random-quote-container").innerHTML = quoteHTML;
}

// Function to display a quote of the day
function displayQuoteOfTheDay() {
    const today = new Date();
    const dayOfYear = today.getDate() % quotes.length;
    const quote = quotes[dayOfYear];
    const quoteHTML = `
        <blockquote>
            <p>${quote.text}</p>
            <footer>${quote.author}</footer>
        </blockquote>
    `;
    document.getElementById("quote-container").innerHTML = quoteHTML;
}

// Function to search quotes
function searchQuotes() {
    const searchInput = document.getElementById("search-quote-input").value;
    const searchResults = quotes.filter(quote => {
        return quote.text.toLowerCase().includes(searchInput.toLowerCase()) || quote.author.toLowerCase().includes(searchInput.toLowerCase());
    });
    const searchResultsHTML = searchResults.map(quote => {
        return `
            <blockquote>
                <p>${quote.text}</p>
                <footer>${quote.author}</footer>
            </blockquote>
        `;
    }).join("");
    document.getElementById("search-quote-results").innerHTML = searchResultsHTML;
}

// Function to submit a quote
function submitQuote() {
    const quoteInput = document.getElementById("submit-quote-input").value;
    const authorInput = document.getElementById("submit-quote-author").value;
    const newQuote = {
        text: quoteInput,
        author: authorInput
    };
    quotes.push(newQuote);
    alert("Quote submitted successfully!");
}

// Event listeners
document.getElementById("random-quote-btn").addEventListener("click", displayRandomQuote);
document.addEventListener("DOMContentLoaded", displayQuoteOfTheDay);
document.getElementById("search-quote-btn").addEventListener("click", searchQuotes);
document.getElementById("submit-quote-btn").addEventListener("click", submitQuote);