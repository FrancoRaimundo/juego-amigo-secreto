let arrayAmigos = [];
let amigo = "";
let agregarALista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {

    // Paso el valor del input a la variable amigo
    amigo = document.getElementById("amigo").value;
    if(amigo != "") {

        // Si hay contenido en el input, agrega el elemento al final del array y lo muestra en pantalla
        arrayAmigos.push(amigo);
        console.log(arrayAmigos);
        agregarALista.insertAdjacentHTML("beforeend", `<li>${amigo}</li>`);
        document.getElementById("amigo").value = "";
    } else {

        // Si no hay contenido muestra alerta
        alert("Por favor, ingrese un nombre.")
    }
  
}

function sortearAmigo() {

    // Verificacion si hay elementos en la lista
    if (arrayAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generando numero aleatorio para sortear
    let random = Math.floor(Math.random() * arrayAmigos.length);
    console.log(random);

    // Envio del resultado a pantalla
    resultado.innerHTML = (`<li>${arrayAmigos[random]}</li>`);
    
}
