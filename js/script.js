// let nombreProductoA= "mesa"
// let precioProductoA= 100

// let nombreProductoB="silla"
// let precioProductoB= 50

// alert("acepte si quiere comprar:" +nombreProductoA + y + nombreProductoB)

// let cantidadProductoA=prompt("ingrese que cantidad de" + nombreProductoA + "desea comprar")
// let cantidadProductoB=prompt("ingrese que cantidad de" + nombreProductoB + "desea comprar")

// let precioTotalA= cantidadProductoA * precioProductoA
// let precioTotalB= cantidadProductoB * precioProductoB
// let precioTotal = precioTotalA + precioTotalB

// let numeroA = 5
// let numeroB = 10
// let resultado = numeroA + numeroB
// let resutado2 = numeroA * numeroB
// console.log(resultado)
// console.log(resultado2)



// alert("el precio total es:" + precioTotal)

// ----------------condicionantes------------

// let verdadero = true
// let esFalso = false


// let precio = prompt("ingrese un numero")

// if (precio < 20) {
//     alert("el precio es menor que 20")
// }
// else if(precio < 50) {
//     alert("el precio es menor a 50")
// }

// else if (precio < 100) {
//     alert("el precio es menor a 100")
// }

// else {
//     alert("el precio es mayor a 100")
// }

// for(let i = 0; i <= 10; i + 1 ){
//     if(i == 5){
//         break
//     }
//     console.log(i)
// }

// let total = 0
// function acumular(num){
//     total += num
// }
// function porCadaUno(array, fn){
    // for( const elemento of array) {fn(elemento)}
// }
// porCadaUno([1,3,4,5], acumular)
// console.log(total)

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
    card.innerHTML = `<H2>${prod.nombre}</H2><p>precio:$${prod.precio}</p> <img src= ${prod.img}> </img>`
    catalogo.append(card)}
}
// ----------NO PUEDO MOSTRAR TODOS LOS PRODUCTOS JUNTOS SIN CLASIFICARLOS POR SU CATEGORIA------------------

render (listaProductosConStock)
alert ("tenemos productos royal y purina")
let categoria = prompt ("ingrese que marca quiere ver:")
let filtroActual = listaProductos.filter((prod) => prod.cat == categoria)

render(filtroActual)

// alert("estos son nuestros productos:  \n - " + listaNombres.join("\n -"))

// let cantidadCompra = prompt("que cantidad de productos distintos quiere comprar")



function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

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
        let cantidadProductoPerformance = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar")     
       calculstock(cantidadProductoPerformance, productoA.stock, productoA["precio"])
       productoA.restarStock(cantidadProductoPerformance)
    }
    else if (productoCompra == "eukanuba"){
        let cantidadProductoB = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar")
        calculstock (cantidadProductoB, productoB.stock, productoB["precio"])
        productoB.restarStock(cantidadProductoB)
    }
    else if (productoCompra == "proplan"){
        let cantidadProductoC = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar")
        calculstock(cantidadProductoC, productoC.stock, productoC["precio"])
        productoC.restarStock(cantidadProductoC) 
    }
    else if(productoCompra == "performance junior"){
        let cantidadProductoD = prompt ("ingrese que cantidad de " + productoD.nombre + " desea comprar")
       calculstock(cantidadProductoD, productoD.stock, productoD["precio"])
       productoD.restarStock(cantidadProductoD)
    }
    else if (productoCompra == "excellent"){
            let cantidadProductoE = prompt ( "ingrese que cantidad de " + productoE.nombre + " desea comprar")
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
if(precioTotal != 0){
    alert("el precio total es:" + precioTotal)
}

alert("Gracias por su visita")