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

function render (lista){
    catalogo.innerHTML = ""

    for (const prod of lista){

    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<H2>${prod.nombre}</H2><p>precio:$${prod.precio}</p> <img src= ${prod.img}> </img><button>Comprar</button>`
    catalogo.append(card)}
}
// ----------NO PUEDO MOSTRAR TODOS LOS PRODUCTOS JUNTOS SIN CLASIFICARLOS POR SU CATEGORIA------------------

render (listaProductosConStock)
alert ("tenemos productos royal y purina")
let categoria = prompt ("ingrese que marca quiere ver:")
let filtroActual = listaProductos.filter((prod) => prod.cat == categoria)

render(filtroActual)

alert("estos son nuestros productos:  \n - " + listaNombres.join("\n -"))

let cantidadCompra = parseInt(prompt("que cantidad de productos distintos quiere comprar")) || 0



function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}
// --------------FORMA COMPLETA DE ESCRIBIR LOS PARAMETROS------------
function calculstock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
   }
   else{
    alert("actualmente tenemos" + stock + "unidades de este producto")}
}



for (let i = 0; i < cantidadCompra; i = i + 1){
    
    let productoCompra = prompt("ingrese que productos quiere comprar:\n - performance \n - eukanuba \n - proplan \n - performance junior \n - excellent \n -puppy")

    if (productoCompra == "performance"){
        let cantidadProductoPerformance = parseInt(prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar")) || 1     
       calculstock(cantidadProductoPerformance, productoA.stock, productoA["precio"])
       productoA.restarStock(cantidadProductoPerformance)
    }
    else if (productoCompra == "eukanuba"){
        let cantidadProductoB = parseInt(prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar")) || 1 
        calculstock (cantidadProductoB, productoB.stock, productoB["precio"])
        productoB.restarStock(cantidadProductoB)
    }
    else if (productoCompra == "proplan"){
        let cantidadProductoC = parseInt(prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar")) || 1 
        calculstock(cantidadProductoC, productoC.stock, productoC["precio"])
        productoC.restarStock(cantidadProductoC) 
    }
    else if(productoCompra == "performance junior"){
        let cantidadProductoD = parseInt(prompt ("ingrese que cantidad de " + productoD.nombre + " desea comprar")) || 1 
       calculstock(cantidadProductoD, productoD.stock, productoD["precio"])
       productoD.restarStock(cantidadProductoD)
    }
    else if (productoCompra == "excellent"){
            let cantidadProductoE = parseInt(prompt ( "ingrese que cantidad de " + productoE.nombre + " desea comprar")) || 1 
        calculstock(cantidadProductoE, productoE.stock, productoE["precio"])
        productoE.restarStock(cantidadProductoE)
    }
    else if (productoCompra == "puppy"){
        let cantidadProductoF = prompt ( "ingrese que cantidad de " + productoF.nombre + " desea comprar")
    calculstock(cantidadProductoF, productoF.stock, productoF["precio"])
    productoF.restarStock(cantidadProductoF)
    }

    else {
    alert("no tenemos ese producto en venta")
    }
}

// --------------FORMA COMPLETA DE ESCRIBIRLO-------------
// if(precioTotal != 0){
//     alert("el precio total es:" + precioTotal)
// }
// else {
//     alert("Gracias por su visita")
// }

// ----------------"EJEMPLO DE UN (OPERADOR TERNARIO)"-----------
(precioTotal != 0) ?  alert("el precio total es:" + precioTotal) : alert("Gracias por su visita")