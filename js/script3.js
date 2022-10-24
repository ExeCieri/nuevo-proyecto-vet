
function Producto(nombre, precio, stock, cat, img){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cat = cat
    this.img = img
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}
let productoA = new Producto("performance", 100, 50, "royal", "./img/performance3.jpg")
let productoB = new Producto("eukanuba", 90, 40,"purina", "./img/eukanuba.jpg")
let productoC = new Producto("proplan", 50, 20, "purina", "./img/proplan.jpg")
let productoD = new Producto("performance junior", 50, 30,"royal", "./img/performancejunior.jpg")
let productoE = new Producto("excellent", 30, 15,"purina", "./img/excellent.jpg")
let productoF = new Producto("puppy", 50, 20, "royal", "./img/puppy.jpg")

let precioTotal = 0
let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]
let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)
let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let catalogo = document.getElementById("catalogo")
// let button = document.getElementById("primerBoton")

let botonVaciar = document.getElementById("vaciarCarro")
botonVaciar = addEventListener("click", () =>{
    carrito.length = 0
    // actualizarCarrito()
})

let carrito = []

listaProductos.forEach((prod) => {
    // catalogo.innerHTML = ""
    
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = 
    `<H3>${prod.nombre}</H3>
    <p>precio:$${prod.precio}</p> 
    <p>stock:${prod.stock}</p>
    <img src= ${prod.img}> </img>
    <button id="agregar${prod.id}" class="botonAgregar">Agregar</button>`
    
    // botonAgregar.setAttribute("mark", prod.id)
    catalogo.append(card)
    
    
    const botonAgregar = document.getElementById("Agregar${prod.id}")
    // boton.addEventListener("click", () =>{
    //     agregarAlCarrito(prod.id)
    // })
}
)
function botonAgregar(event){
    carrito.push(event.target.getAttribute('mark'))
    renderCart()
    console.log(carrito)
}
// const agregarAlCarrito = (prodId) => {
//     const item = stockProductos.filter((prod)=> prod.id ===prodId)
//     carrito.push(item)
//     console.log("carrito")
// }