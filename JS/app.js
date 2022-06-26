const productosContainer = document.querySelector('#contenedor-productosP')
const item = menuPizza [0]
const pedido = []
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
  productosContainer.appendChild(div)
})





// SELECCION DEL PRODUCTO
const agregarPedido = (id) => {
  const item = menuPizza.find ((producto) => producto.id === id)
  
  pedido.push(item)
  console.log(pedido)

  renderPedido()
  renderCantidad()
  renderTotal()
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
    <button class="btn-eliminar"> X Sustraer </button>
    `
    pedidoContenedor.append(div)
  }) 
}

//RENDERIZADO DE LA CANTIDAD SELECCIONADA EN CARRITO
const renderCantidad = () => {
  contadorPedido.innerText = pedido.length
}

// SUMA TOTAL DEL PEDIDO
const renderTotal = () => {
console.log("renderTotal")
console.log(pedido)

let total = 0 
pedido.forEach((producto) =>{
    total += producto.precio
})

  precioTotal.innerText = total 
}