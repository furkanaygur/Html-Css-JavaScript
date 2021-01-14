class Currency {
    constructor(firstCurrency, secondCurrency){
        this.firstCurrecy = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange(){
        return new Promise((resolve, reject)=>{
            fetch(this.url + this.firstCurrecy).then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];   
                let total =  parity * Number(this.amount);
                console.log(total);
                resolve(total);
            }).catch(err => reject(err));
        })
    }

    changeAmount(newAmount){
        this.amount = newAmount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrecy = newFirstCurrency;  
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}