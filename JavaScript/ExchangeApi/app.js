const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");


function getValues(){
    const firstSelectValue = firstSelect.options[firstSelect.selectedIndex].value;
    const secondSelectValue = secondSelect.options[secondSelect.selectedIndex].value;
    const amountValue = amountElement.value;
    return [firstSelectValue,secondSelectValue,amountValue];
}


const currency = new Currency(getValues()[0],getValues()[1]); 
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);

    firstSelect.onchange = function(){
        currency.changeFirstCurrency(getValues()[0]);
        ui.changeFirst();
        exchangeCurrency();
    }
    
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(getValues()[1]);
        ui.changeSecond();
        exchangeCurrency();
    }
}

function exchangeCurrency(){
    currency.changeAmount(getValues()[2])
    currency.exchange().then(result => {
        ui.displayResult(result);
    }).catch(err => console.log(err));
}