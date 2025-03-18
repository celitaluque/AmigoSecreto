// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración del array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo al array y actualizar la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = ''; // Limpiar el campo de texto
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

    amigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado previo

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade al menos uno.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
