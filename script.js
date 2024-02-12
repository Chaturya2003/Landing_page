document.addEventListener('DOMContentLoaded', function() {
    const prices = document.querySelectorAll('.price');
    const changeCurrencyBtn = document.getElementById('change-currency-btn');

    const INR_TO_USD = 0.014; // Conversion rate: 1 INR = 0.014 USD

    function convertToUSD() {
        prices.forEach(price => {
            const priceInr = parseFloat(price.dataset.priceInr);
            const priceUsd = (priceInr * INR_TO_USD).toFixed(2);
            price.textContent = '$' + priceUsd;
        });
    }

    function convertToINR() {
        prices.forEach(price => {
            const priceInr = parseFloat(price.dataset.priceInr);
            price.textContent = '₹' + priceInr;
        });
    }

    changeCurrencyBtn.addEventListener('click', function() {
        if (changeCurrencyBtn.textContent === 'Change to USD') {
            convertToUSD();
            changeCurrencyBtn.textContent = 'Change to INR';
        } else {
            convertToINR();
            changeCurrencyBtn.textContent = 'Change to USD';
        }
    });
});
