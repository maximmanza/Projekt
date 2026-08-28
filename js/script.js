let poeng1 = 0;
let poeng2 = 0;

function pluss1() {
    poeng1++;
    document.getElementById("poeng1").innerText = poeng1;
}

function minus1() {
    poeng1--;
    document.getElementById("poeng1").innerText = poeng1;
}

function pluss2() {
    poeng2++;
    document.getElementById("poeng2").innerText = poeng2;
}

function minus2() {
    poeng2--;
    document.getElementById("poeng2").innerText = poeng2;
}

function nullstill() {
    poeng1 = 0;
    poeng2 = 0;

    document.getElementById("poeng1").innerText = poeng1;
    document.getElementById("poeng2").innerText = poeng2;
}


function farge() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black"
        ? "white"
        : "black";

    document.body.style.color =
        document.body.style.color === "white"
        ? "black"
        : "white";

    document.getElementById("buton").src =
        document.getElementById("buton").src.includes("sol")
        ? "/bilde/mørk.png"
        : "/bilde/sol.png";
}



let sitater = [
    "Penger gjør deg ikke lykkelig, men det er mer behagelig å gråte i en Ferrari",
    "Jeg er så smart at jeg noen ganger ikke forstår et eneste ord av det jeg sier",
    "Livet er for kort til å være alvorlig hele tiden. Så om du ikke kan le av deg selv, ring meg, så skal jeg le av deg",
    "Husk alltid at du er helt unik. Akkurat som alle andre",
    "Alder har ingen betydning, med mindre du er en ost"
];

function nyttSitat() {
    let tilfeldig = Math.floor(Math.random() * sitater.length);

    document.getElementById("sitat").innerText = sitater[tilfeldig];
}


let bilder = [
    "/bilde/balet.jpg",
    "/bilde/biznes.jpg",
    "/bilde/cr7.jpg",
    "/bilde/krutoi.jpg",
    "/bilde/pablo.jpg",
    "/bilde/pivo.jpg",
    "/bilde/saske.jpg",
    "/bilde/sigma.jpg",
    "/bilde/vaca.jpg",
    "/bilde/what.jpg",
    "/bilde/zakuril.jpg",
    "/bilde/fast.png",


];

function nyttBilde() {
    let tilfeldig = Math.floor(Math.random() * bilder.length);

    document.getElementById("bilde").src = bilder[tilfeldig];
}