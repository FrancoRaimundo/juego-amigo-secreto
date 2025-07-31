// # juego-amigo-secreto
// Desafio propuesto en ONE - Alura Latam para implementar los conocimientos aprendidos sobre lógica de programación.

🧑‍🤝‍🧑 Juego de Sorteo de Amigos
Este es un proyecto simple en JavaScript, HTML y CSS que permite agregar una lista de amigos y luego sortear uno al azar. Ideal para juegos, rifas o simplemente divertirse en grupo.

🚀 ¿Cómo usar el juego?
Escribí el nombre de un amigo en el campo de texto.

Hacé clic en el botón “Agregar” para añadirlo a la lista.

Repetí los pasos anteriores hasta que hayas agregado a todos los participantes.

Una vez que la lista esté completa, hacé clic en “Sortear”.

El juego seleccionará aleatoriamente a uno de los amigos de la lista y mostrará su nombre en pantalla.

📋 Requisitos
No necesitás instalar nada. Solo abrí el archivo index.html en tu navegador y el juego funcionará.

🛠 Tecnologías utilizadas
HTML

CSS

JavaScript

💡 Observaciones
No se permiten campos vacíos al agregar amigos.

Podés sortear tantas veces como quieras.

El nombre sorteado aparecerá al final de la lista como resultado.

---------------------------------------------------------------------------------------------------------------

🎯 Challenge: Sorteador de Amigos
🧠 Descripción del proyecto
Este proyecto consiste en una aplicación web que permite al usuario ingresar nombres en una lista y luego realizar un sorteo aleatorio entre ellos. El objetivo principal fue resolver el problema mayor de seleccionar un nombre aleatorio de un conjunto ingresado por el usuario, dividiendo el desarrollo en subproblemas más simples que se resolvieron paso a paso.

🔍 Enfoque de resolución
🧩 Subproblemas identificados:
Capturar el nombre ingresado por el usuario.
Almacenar correctamente los nombres en una estructura de datos.
Mostrar dinámicamente en pantalla los nombres almacenados.
Validar que no se agregue un nombre vacío.
Implementar la lógica de sorteo aleatorio.
Mostrar el resultado del sorteo en pantalla.

🛠️ Proceso de desarrollo
1. Crear la estructura HTML
Definí los elementos base del formulario: un input de texto, un botón para agregar amigos, una lista para mostrarlos y un botón para ejecutar el sorteo.

2. Captura y validación del nombre
Utilicé document.getElementById("amigo").value para capturar el nombre.
Apliqué una validación básica para evitar strings vacíos con una simple condición if (amigo != "").

3. Almacenamiento de los nombres
Implementé un array arrayAmigos[] que va almacenando cada nombre ingresado.
Usé array.push() para agregar elementos dinámicamente al array.

4. Mostrar los nombres en pantalla
Por cada nombre agregado, lo inserté en una lista (<li>) con insertAdjacentHTML para mantener la visualización clara y ordenada.

5. Sorteo aleatorio
La selección aleatoria se implementó con:
Math.floor(Math.random() * arrayAmigos.length)
Esta línea genera un índice válido del array, asegurando que siempre esté dentro de los límites correctos.

7. Mostrar el nombre sorteado
Finalmente, el nombre seleccionado se imprime como nuevo elemento <li> dentro de la lista del resultado.

🧪 Pruebas realizadas
Se realizaron múltiples pruebas agregando diferentes cantidades de nombres.
Se verificó que el sorteo siempre devuelva uno de los nombres ya ingresados.
También se controlaron los casos donde el input estaba vacío para evitar entradas inválidas.
