function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLang = document.getElementById("outputLanguage")
    this.outputWord = document.getElementById("outputWord");
    this.langList = document.getElementById("language");
}

UI.prototype.changeUi = function(){
    this.outputImage.src = `images/${this.langList.value}.png`;
    this.outputLang.innerHTML = this.langList.options[this.langList.selectedIndex].textContent;
}

UI.prototype.displayResult = function(word){
    this.outputWord.textContent = word;
}