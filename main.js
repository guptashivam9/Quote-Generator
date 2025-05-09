const quotes = [
    { text: "The good thing about science is that it's true whether or not you believe in it.", category: "science" },
    { text: "Science is simply the word we use to describe a method of organizing our curiosity.", category: "science" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", category: "computer" },
    { text: "Computer science is no more about computers than astronomy is about telescopes.", category: "computer" }
  ];
  
  let currentIndex = 0;
  let currentCategory = 'all';
  let fontSize = 18;
  
const quoteText = document.getElementById('text');

  const getFilteredQuotes = () => {
    return currentCategory === 'all' ? quotes : quotes.filter(q => q.category === currentCategory);
  };

  const displayQuote = () => {
    const filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length === 0) {
      quoteText.textContent = ' Opps! no quotes available for this category.';
      return;
    }
    currentIndex = (currentIndex + filteredQuotes.length) % filteredQuotes.length;
    quoteText.textContent = filteredQuotes[currentIndex].text;
  };

document.getElementById('next-quote').addEventListener('click', () => {
    currentIndex++;
    displayQuote();
  });

  document.getElementById('prev-quote').addEventListener('click', () => {
    currentIndex--;
    displayQuote();
  });
  
  document.getElementById('random-quote').addEventListener('click', () => {
    const filteredQuotes = getFilteredQuotes();
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote();
  });

const categorySelect = document.getElementById('category-select');
  categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    displayQuote();
  });

  const modeToggleIcon = document.getElementById('mode-toggle-icon');
  modeToggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 2;
    quoteText.style.fontSize = fontSize + 'px';
  });
  
  document.getElementById('decrease-font').addEventListener('click', () => {
    fontSize = Math.max(10, fontSize - 2);
    quoteText.style.fontSize = fontSize + 'px';
  });
  
  displayQuote();
  