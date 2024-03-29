

function Producto(id, nombre, precio, stock, cat, img){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cat = cat;
    this.img = img;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}
let productoA = new Producto(1, "performance", 100, 50, "royal", "./img/performance3.jpg")
let productoB = new Producto(2, "eukanuba", 90, 40,"purina", "./img/eukanuba.jpg")
let productoC = new Producto(3, "proplan", 50, 20, "purina", "./img/proplan.jpg")
let productoD = new Producto(4, "performance junior", 50, 30,"royal", "./img/performancejunior.jpg")
let productoE = new Producto(5, "excellent", 30, 15,"purina", "./img/excellent.jpg")
let productoF = new Producto(6, "puppy", 50, 20, "royal", "./img/puppy.jpg")

let precioTotal = 0
let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]
let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)
let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let catalogo = document.getElementById("catalogo")
let carritoC = document.getElementById("carrito")
let botonVacia = document.getElementById("vaciar")
// let botonAgregar = document.getElementById("Agregar")
let carrito = []
let botonVaciar = document.getElementById("vaciarCarro")
    botonVaciar = addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})



listaProductos.forEach((prod) => {
    
    
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = 
    `<H3>${prod.nombre}</H3>
    <p>precio:$${prod.precio}</p> 
    <p>stock:${prod.stock}</p>
    <img src= ${prod.img}> </img>
    <button id="${prod.id}" class="botonAgregar">Agregar</button>`

    
    catalogo.append(card)
    
    
    // const botonAgregar = document.getElementById("Agregar${prod.id}")
    // boton.addEventListener("click", () =>{
    //     agregarAlCarrito(prod.id)
    // })
}
)


botonAgregar.setAttribute("mark", prod.id)
botonAgregar.addEventListener("click", agregarAlCarrito)

function botonAgregar(event){
    carrito.push(event.target.getAttribute('mark'))
    renderCart()
    console.log(carrito)
    
}

const agregarAlCarrito = (prodId) => {
  let item = listaProductosConStock.find((prod)=> prod.id === prodId)
  carrito.push(item)

  Toastify({
    text: "Agregaste correctamente el producto id: ${id} al carrito,",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}
function actualizarCarrito(){

catalogo.innerHTML = ""
  
}
// anime({
//     targets: ".el",
//     translateX: 250,
//     duration: 3000
//   });