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



  