const langs = ["python","html","css"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("added");
        callback();
    },1000);
}

function getAllLangs(){
    langs.forEach(function(lang){
        console.log(lang);  
    }); 
}
addLang("JavaScript",getAllLangs);
