let amigos = [];

// función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos();
}

// función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigosUL = document.getElementById('listaAmigos');
    listaAmigosUL.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const li = document.createElement('li');
        li.textContent = amigo;

        // Aplicando estilos directamente con JavaScript
        li.style.backgroundColor = '#FFFFFF'; // Fondo blanco
        li.style.color = '#4B69FD'; // Texto color primario
        li.style.marginBottom = '10px'; // Espacio inferior entre items
        li.style.padding = '15px 20px'; // Padding interno
        li.style.borderRadius = '30px'; // Bordes redondeados
        li.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)'; // Sombra suave
        li.style.border = '2px solid #C4C4C4'; // Borde sutil
        li.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'; // Transición suave (aunque no hay hover sin CSS, lo dejamos por si acaso o para futuro JS hover)
        li.style.display = 'flex'; // Flexbox para alinear contenido si es necesario
        li.style.alignItems = 'center'; // Centrar verticalmente
        li.style.justifyContent = 'space-between'; // Espacio entre elementos internos si los hubiera

        listaAmigosUL.appendChild(li);

        // Evento de "hover" simulado con JavaScript (opcional, y básico)
        li.addEventListener('mouseover', function() {
            li.style.transform = 'scale(1.02)';
            li.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        li.addEventListener('mouseout', function() {
            li.style.transform = 'scale(1)';
            li.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
    }
}

// función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, añade amigos a la lista antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUL = document.getElementById('resultado');
    resultadoUL.innerHTML = ""; // Limpiar resultados anteriores
    const li = document.createElement('li');
    li.textContent = "🎉 ¡Amigo secreto sorteado es: 🎁 " + amigoSorteado + " 🎊!";
    resultadoUL.appendChild(li);
}

// evento para agregar amigo con la tecla "Enter"
const inputAmigo = document.getElementById('amigo');
inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter en formularios
        agregarAmigo();
    }
});