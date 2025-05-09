const quotes = [
    { text: "The good thing about science is that it's true whether or not you believe in it.", category: "science" },
    { text: "Science is simply the word we use to describe a method of organizing our curiosity.", category: "science" },
    { text: "Nothing in life is to be feared, it is only to be understood.", category: "science" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", category: "science" },
    { text: "Science is a way of thinking much more than it is a body of knowledge.", category: "science" },
    { text: "Research is what I'm doing when I don't know what I'm doing.", category: "science" },
    { text: "Science is the great antidote to the poison of enthusiasm and superstition.", category: "science" },
    { text: "The universe is under no obligation to make sense to you.", category: "science" },
    { text: "Science is the poetry of reality.", category: "science" },

    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", category: "computer" },
    { text: "Computer science is no more about computers than astronomy is about telescopes.", category: "computer" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", category: "computer" },
    { text: "The purpose of computing is insight, not numbers.", category: "computer" },
    { text: "The computer was born to solve problems that did not exist before.", category: "computer" },
    { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", category: "computer" },
    { text: "Good code is its own best documentation.", category: "computer" },
    { text: "An algorithm must be seen to be believed.", category: "computer" },
    { text: "Computers are good at following instructions, but not at reading your mind.", category: "computer" }

  ];
  
  let currentIndex = 0;
  let currentCategory = 'all';
  let fontSize = 14;
  
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
  