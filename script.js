document.addEventListener('DOMContentLoaded', function() {
    const monthlyOption = document.getElementById('monthly');
    const annualOption = document.getElementById('annual');
    const priceElements = document.querySelectorAll('.price');
    const currencyInput = document.getElementById('currency');
    const unitInput = document.getElementById('unit');

    monthlyOption.addEventListener('click', function() {
        monthlyOption.classList.add('selected');
        annualOption.classList.remove('selected');
        updatePrices(currencyInput.value, unitInput.value, priceElements[0]);
    });

    annualOption.addEventListener('click', function() {
        annualOption.classList.add('selected');
        monthlyOption.classList.remove('selected');
        updatePrices(currencyInput.value, unitInput.value, priceElements[1]);
    });

    currencyInput.addEventListener('input', function() {
        updatePrices(currencyInput.value, unitInput.value, priceElements[0]);
        updatePrices(currencyInput.value, unitInput.value, priceElements[1]);
    });

    unitInput.addEventListener('input', function() {
        updatePrices(currencyInput.value, unitInput.value, priceElements[0]);
        updatePrices(currencyInput.value, unitInput.value, priceElements[1]);
    });

    function updatePrices(currency, unit, element) {
        const originalPrice = element.dataset.currency + element.dataset.unit;
        element.textContent = currency + originalPrice.substring(1);
    }
});
