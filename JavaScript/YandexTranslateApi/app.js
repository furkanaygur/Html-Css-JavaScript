
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){
        ui.changeUi();
    }
}
const textValue = document.getElementById("word").value;
const langValue = document.getElementById("language").value;

const translate = new Translate(textValue,langValue);
const ui = new UI();

function translateWord(e){
    translate.changeValues(textValue, langValue);
    translate.translateWord(function(err,response){
        // if(err){
        //     console.log(err);
        // }
        // else {
        //     ui.displayResult(response);
        // }
        ui.displayResult(err,response);
    });

    e.preventDefault();
}