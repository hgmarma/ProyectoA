const productosContainer = document.querySelector('#contenedor-productosP')
const item = menuPizza [0]
let pedido = []
const pedidoContenedor = document.querySelector('#pedido-contenedor')
const contadorPedido = document.querySelector ('#contador-pedido')
const precioTotal = document.querySelector ('#precio-total')
const contenedorClass = document.querySelector ('#contenedor-menu')

// CREACION DE PRODUCTOS EN JS

menuPizza.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add= ('galery')
  div.innerHTML = `
  <img src="${producto.imagen}" alt="">
  <h1>${producto.nombre}</h1>
  <p>${producto.descrip}</p> 
  <p class="precioProducto"> VALOR $ ${producto.precio}</p>
  <button onclick="agregarPedido(${producto.id})" class="boton-pedidoAgregar">PEDIR
  <i class="fa-solid fa-cash-register"></i></button> 
  ` 
  contenedorClass.appendChild(div)
})


contenedorClass.className= ('galery')




// SELECCION DEL PRODUCTO
const agregarPedido = (id) => {
  let item = menuPizza.find ((producto) => producto.id === id)

  pedido.push(item)
  console.log(pedido)

  renderPedido()
  renderCantidad()
 
}

//RENDERIZADO DEL PRODUCTO SELECCIONADO EN CARRITO 
const renderPedido = () => {

  pedidoContenedor.innerHTML= ``

  pedido.forEach ((item) => {
    const div = document.createElement ('div')
    div.classList.add('productoencarrito')

    div.innerHTML = `
    <p>${item.nombre}</p>
    <p>$ ${item.precio}</p>
    <button id= "eliminar${item.id}" class="btn-eliminar"> X Sustraer </button>
    `
    
    pedidoContenedor.appendChild(div)

    eliminarDelCarrito(item)
    
  }) 
}

//RENDERIZADO DE LA CANTIDAD SELECCIONADA EN CARRITO
const renderCantidad = () => {
  contadorPedido.innerText = pedido.length
  precioTotal.innerText = pedido.reduce((acc, el)=> acc + el.precio , 0);
}


function eliminarDelCarrito(item){
  let btnEliminar = document.getElementById(`eliminar${item.id}`);
  
  btnEliminar.addEventListener('click', ()=> {
      btnEliminar.parentElement.remove();
      pedido= pedido.filter(elemento=> elemento.id !== item.id);
      renderPedido();
      renderCantidad();

      console.log(pedido)
      //parent element me muestra al padre del elemento que tomo con id, y al hacer el remove, logro sacar al padre
      //del contenedor de ese producto, en este caso, quien contiene mi producto es productoencarrito.
  })
  
}