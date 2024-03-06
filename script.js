// Obtener todos los elementos de la lista del cuadro sinóptico
var elementosLista = document.querySelectorAll('.cuadro-sinoptico li');

// Iterar sobre cada elemento de la lista
elementosLista.forEach(function(elemento) {
  // Agregar un evento de clic a cada elemento
  elemento.addEventListener('click', function() {
    // Obtener el id del elemento clickeado
    var id = this.id;
    
    // Ocultar todos los textos
    var textos = document.querySelectorAll('.texto');
    textos.forEach(function(texto) {
      texto.style.display = 'none';
    });
    
    // Mostrar solo el texto correspondiente al id clickeado
    var textoMostrar = document.getElementById('texto-' + id);
    textoMostrar.style.display = 'block';
  });
});
