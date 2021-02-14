function getrandomcolor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * 16);
        color = color + letters[r];
    }
    return color;
}
var red = document.querySelector("#red");
var orange = document.querySelector("#orange");
var voilet = document.querySelector("#voilet");
var blue = document.querySelector("#blue");
var yellow = document.querySelector("#yellow");
var indigo = document.querySelector("#indigo");
var green = document.querySelector("#green");

function firstcolor() {
    var color1 = getrandomcolor();
    red.style.background = color1;

}

function secondcolor() {
    var color2 = getrandomcolor();
    orange.style.background = color2;
}

function thirdcolor() {
    var color3 = getrandomcolor();
    voilet.style.background = color3;
}

function fourthcolor() {
    var color4 = getrandomcolor();
    blue.style.background = color4;
}

function fifthcolor() {
    var color5 = getrandomcolor();
    yellow.style.background = color5;
}

function sixthcolor() {
    var color6 = getrandomcolor();
    indigo.style.background = color6;
}

function seventhcolor() {
    var color7 = getrandomcolor();
    green.style.background = color7;
}
setInterval(seventhcolor, 1000);
setInterval(sixthcolor, 1000);
setInterval(fifthcolor, 1000);
setInterval(firstcolor, 1000);
setInterval(secondcolor, 1000);
setInterval(thirdcolor, 1000);
setInterval(fourthcolor, 1000);


var container = document.querySelector(".container");

function containercolor() {
    var containerbordercolor = getrandomcolor();
    container.style.borderColor = containerbordercolor
}
setInterval(containercolor, 1000);




var myname = document.querySelector("#name1");

function namecolor() {

    var nametextcolor = getrandomcolor();


    myname.style.color = nametextcolor;

}
setInterval(namecolor, 1000);


function getRandomName() {
    var names = ["KANNA SURESH", "FRONTEND WEB DEVELOPER", "ANGULAR DEVELOPER", "UI/UX DEVELOPER"];
    var r = Math.floor(Math.random() * 4);
    return names[r];
}

function namechanger() {
    var nameschanging = getRandomName();
    myname.textContent = nameschanging;
}
setInterval(namechanger, 1000);