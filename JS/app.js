const productosContainer = document.querySelector('#contenedor-productosP')
const item = menuPizza [0]
const pedido = []
const pedidoContenedor = document.querySelector('#pedido-contenedor')
const contadorPedido = document.querySelector ('#contador-pedido')
const precioTotal = document.querySelector ('#precio-total')

menuPizza.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('leyenda')
  div.innerHTML = `
  <img src="${producto.imagen}" alt="">
  <h1>${producto.nombre}</h1>
  <p>${producto.descrip}</p> 
  <p class="precioProducto"> VALOR $ ${producto.precio}</p>
  <button onclick="agregarPedido(${producto.id})" class="boton-pedidoAgregar">PEDIR
  <i class="fa-solid fa-cash-register"></i></button> 
  ` 
   productosContainer.append(div)
})

const agregarPedido = (id) => {
  const item = menuPizza.find ((producto) => producto.id === id)
  pedido.push(item)

  console.log(pedido)
  renderPedido()
  renderCantidad()
  renderTotal()
}

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

const renderCantidad = () => {
  contadorPedido.innerText = pedido.length
}

const renderTotal = () => {

let total = 0 
pedido.forEach((producto) =>{
    total += producto.precio
})

  precioTotal.innerText = total 
}