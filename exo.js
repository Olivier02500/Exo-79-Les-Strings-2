let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('pomme'));
/*
exo 1
 */

let exo1 = document.getElementById('index-pomme');
exo1.innerText = pomme.indexOf('pomme');

/*
exo 2
 */

let exo2 = document.getElementById('last-index-m');
exo2.innerText = pomme.lastIndexOf('m');

/*
exo 3
 */

let exo3 = pomme.startsWith('Elle');
if (exo3 === true) {
    console.log("Elle est belle ma pomme ! Commence par Elle");
}
else {
    console.log("Elle est belle ma pomme ! Ne commence pas par Elle")
}

/*
exo 4
 */

let exo4 = pomme.endsWith('!');
if (exo4 === true) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}
else {
    console.log("Elle est belle ma pomme ! Ne se termine pas par un point d'exclamation")
}

/*
exo 5
 */

let exo5 = document.getElementById('pomme');
exo5.innerText = pomme.substring(18, 23);

/*
exo 6
 */

let exo6 =document.getElementById('one-line');
for ( let i = 0; i < pomme.length; i++ ) {
    exo6.innerHTML += pomme[i] +'<br>'
    console.log(pomme[i])
}