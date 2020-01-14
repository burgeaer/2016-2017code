// window.onload = function () {
//
//     var target = document.querySelector("#target");
//     var Jedi = new Object();
//     Jedi.name = "Yoda";
//     Jedi.class = "Jedi Knight";
//     Jedi.message = "Study hard, you will";
//
//
//     var str = "Class: " + Jedi.class + "<br>";
//     str += "Message: " + Jedi.message + "<br>";
//     str += "Name: " + Jedi.name + "<br>";
//     Jedi.age = "900";
//     target.innerHTML = str + Jedi.name + " is " + Jedi.age + " years old";
//
// }

var keys = ["id","name","course","grade","semester","year"];
var values = [101,"Kevin Smith","JavaScript 101","A","Spring","2018"];

var keys   = ["player","team","score"];
var values = ["PeaceMaker","Apple One","10000"];

var code   = ["4101","4201","4430","5769"];
var values = ["Apple","Banana","Zucchini","Spinach"];

var zipcodes = ["53401","02907","93726","60611"];
var cities   =["Racine","Providence","Fresno","Chicago"];

var student = returnObject();

function returnObject() {
    var arguements = [];
    for(i = 0; i < arguements.length; i++) {
        arguements.concat(keys, values, code, zipcodes, cities);
    }
    return arguements;
}
