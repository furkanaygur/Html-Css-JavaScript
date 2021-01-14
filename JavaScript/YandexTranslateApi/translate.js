function Translate (word,lang){
    this.apiKey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word = word;
    this.lang = lang;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.changeValues = function(newWord, newLang) {
    this.word = newWord;
    this.lang = newLang;
}


Translate.prototype.translateWord = function(callback){
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.lang}`;
    this.xhr.open("GET",endPoint);
    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
        }
        else {
            callback(`Error!!! ${this.xhr.status}`,null);
        }
    }
    this.xhr.send();
}
