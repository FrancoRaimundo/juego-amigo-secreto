// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];
let amigo = "";
let agregarALista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let tamañoArray = 0;
let random = 0;

function agregarAmigo() {
    amigo = document.getElementById("amigo").value;
    if(amigo != "") {
        arrayAmigos.push(amigo);
        console.log(arrayAmigos);
        agregarALista.insertAdjacentHTML("beforeend", `<li>${amigo}</li>`);
        tamañoArray++;
        console.log(tamañoArray);
    } else {
        alert("Por favor, ingrese un nombre.")
    }

    random = Math.floor((Math.random * tamañoArray));
    console.log(random);
}

function sortearAmigo() {
    
    // resultado.innerHTML = arrayAmigos[arrayAmigos.length];
    // alert(resultado);
}