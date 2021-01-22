const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate(){
    const currency_1 = currency_one.value;
    const currency_2 = currency_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.rates[currency_2];

        rateEl.innerText = `1 ${currency_1} = ${rate} ${currency_2}`

        amount_two.value = (amount_one.value * rate).toFixed(2);
    })

    
};

//Even listeners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
currency_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})
calculate();