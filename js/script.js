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
        document.body.style.backgroundColor === "black" ? "white" : "black";

    document.body.style.color =
        document.body.style.color === "white" ? "black" : "white";

    document.getElementById("buton").src =
        document.getElementById("buton").src.includes("sol")
        ? "/bilde/mørk.png"
        : "/bilde/sol.png";
}