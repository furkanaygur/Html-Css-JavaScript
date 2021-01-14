class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputResult = document.getElementById("outputResult");
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[firstSelect.selectedIndex].value;
    }
    
    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[secondSelect.selectedIndex].value;
    }

    displayResult(result){
        this.outputResult.value = result;
    }
}