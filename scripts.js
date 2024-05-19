document.addEventListener('DOMContentLoaded', () => {
    const changeFontBtn = document.getElementById('change-font-btn');
    const changeColorBtn = document.getElementById('change-color-btn');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const quoteDisplay = document.getElementById('quote-display');
    const timerDisplay = document.getElementById('timer');

    const quotes = [
        '"Peace comes from within. Do not seek it without."',
        '"The mind is everything. What you think you become."',
        '"Three things cannot be long hidden: the sun, the moon, and the truth."',
        '"You will not be punished for your anger, you will be punished by your anger."',
        '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."'
    ];

    changeFontBtn.addEventListener('click', () => {
        document.body.style.fontFamily = document.body.style.fontFamily === 'Arial' ? 'Georgia' : 'Arial';
    });

    changeColorBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#d4edda' : 'white';
    });

    newQuoteBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });

    function countdown() {
        const eventDate = new Date('May 19, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            timerDisplay.textContent = 'The event has started!';
        }
    }

    const interval = setInterval(countdown, 1000);
});
