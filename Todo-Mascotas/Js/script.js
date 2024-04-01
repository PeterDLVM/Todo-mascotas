function agregarAlCarrito() {
    let cantidadCarrito = parseInt(document.getElementById("cantidad-carrito").textContent);
    cantidadCarrito++;
    document.getElementById("cantidad-carrito").textContent = cantidadCarrito;
}
function quitarDelCarrito() {
    let cantidadCarrito = parseInt(document.getElementById("cantidad-carrito").textContent);
    if (cantidadCarrito > 0) {
        cantidadCarrito--;
        document.getElementById("cantidad-carrito").textContent = cantidadCarrito;
    }
}

// Función para mostrar u ocultar las miniaturas del carrito
function toggleMiniaturasCarrito() {
    const miniaturasCarrito = document.getElementById("miniaturas-carrito");
    miniaturasCarrito.classList.toggle("visible");
  }
  
  // Obtener el elemento del carrito
  const carritoIcono = document.getElementById("carrito-icono");
  
  // Agregar un evento de clic al ícono del carrito
  carritoIcono.addEventListener("click", function() {
    // Llamar a la función para mostrar u ocultar las miniaturas del carrito
    toggleMiniaturasCarrito();
  });
  
  // Llamar a la función para ocultar las miniaturas del carrito cuando se haga clic fuera del visor
  document.addEventListener("click", function(event) {
    const miniaturasCarrito = document.getElementById("miniaturas-carrito");
    if (!miniaturasCarrito.contains(event.target) && event.target !== carritoIcono) {
      miniaturasCarrito.classList.remove("visible");
    }
  });
