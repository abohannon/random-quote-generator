/* eslint-env browser */
const QuoteGenerator = (function module() {
  const QUOTE_URL = 'https://gist.githubusercontent.com/abohannon/a0187309c729f04d571b74cfca893dac/raw/e680af4b71494e520c4d6f8bfaa2e98142e728fe/trump-quote2';

  const colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#e67e22', '#e74c3c', '#c0392b', '#f39c12', '#BDBB99', '#77B1A9', '#73A857' ];

  let quotes = [];

  // DOM Elements
  const htmlBody = document.querySelector('body');
  const quoteBox = document.querySelector('.quote-box');
  const lead = document.querySelector('.lead');
  const quoteText = document.querySelector('#quote');
  const button = document.querySelector('.quote-btn');
  const twitterIcon = document.querySelector('.fa-twitter-square');
  const twitterButton = document.querySelector('#tweet-quote');

  // Private API
  const fetchQuotes = () => {
    fetch(QUOTE_URL)
      .then(response => response.json())
      .then((json) => { quotes = json; });
  };

  // Public API
  const publicApi = {
    button,
    init() {
      fetchQuotes();
    },
    changeQuote() {
      const quoteIndex = Math.floor(Math.random() * (quotes.length - 1));
      const colorIndex = Math.floor(Math.random() * (colors.length - 1));
      const currentQuote = quotes[quoteIndex];
      const currentColor = colors[colorIndex];

      twitterButton.setAttribute('href', `http://twitter.com/share?text="${currentQuote.quote}"&hashtags=shittrumpsaid`);

      this.fadeOut(lead, currentQuote, this.fadeIn);
      this.changeColor(currentColor, 3);
    },
    fadeOut(element, currentQuote, callback) {
      let op = 1; // initial opacity
      const timer = setInterval(() => {
        if (op <= 0.1) {
          quoteText.innerHTML = currentQuote.quote;
          clearInterval(timer);
          callback(element);
        }
        element.style.opacity = op;
        op -= op * 0.1;
      }, 30);
    },
    fadeIn(element) {
      let op = 0.1; // initial opacity
      const timer = setInterval(() => {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
      }, 30);
    },
    changeColor(currentColor, interval) {
      htmlBody.style.backgroundColor = currentColor;
      htmlBody.style.transition = `background-color ${interval}s`;

      button.style.backgroundColor = currentColor;
      button.style.transition = `background-color ${interval}s`;

      quoteBox.style.color = currentColor;
      quoteBox.style.transition = `color ${interval}s`;

      twitterIcon.style.color = currentColor;
      twitterIcon.style.transition = `color ${interval}s`;
    },
  };

  return publicApi;
}());

QuoteGenerator.init();
QuoteGenerator.button.addEventListener('click', () => QuoteGenerator.changeQuote());
