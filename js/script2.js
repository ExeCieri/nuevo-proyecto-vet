// let producatoA = {
//     nombre: 
// }


// let nombreProductoA= "performance"
// let precioProductoA= 200
// let stockProductoA= 15

// let nombreProductoB="eukanuba"
// let precioProductoB= 150
// let stockProductoB= 20

// let nombreProductoC = "sieger"
// let precioProductoC = 100
// let stockProductoC= 10

// let nombreProductoD = "canfeed"
// let precioProductoD = 50
// let stockProductoD = 10

// let nombreProductoE = "pedigree"
// let precioProductoE = 30
// let stockProductoE = 10

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}
let productoA = new Producto("performance", 100, 50)
let productoB = new Producto("eukanuba", 90, 40)
let productoC = new Producto("sieger", 50, 20)
let productoD = new Producto("canfeed", 50, 20)
let productoE = new Producto("pedigree", 30, 15)

let precioTotal = 0
let listaProductos = [productoA, productoB, productoC, productoD, productoE]
let listNombres = listaProductos.filter((prod) => prod.stock > 0)

alert("estos son nuestros productos:  \n - performance \n - eukanuba \n - sieger \n - canfeed \n - pedigree ")

let cantidadCompra = prompt("que cantidad de productos distintos quiere comprar")



function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculstock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
   }
   else{
    alert("actualmente tenemos" + stockProductoA + "unidades de este producto")}
}



for (let i = 0; i < cantidadCompra; i = i + 1){
    
    let productoCompra = prompt("ingrese que productos quiere comprar:\n - performance \n - eukanuba \n - sieger \n - canfeed \n - pedigree")

    if (productoCompra.toUpperCase() == "performance"){
        let cantidadProductoPerformance = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar")     
       calculstock(cantidadProductoPerformance, stockProductoA, precioProductoA)
    }
    else if (productoCompra == "eukanuba"){
        let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar")
        calculstock (cantidadProductoB, stockProductoB, precioProductoB)
    }
    else if (productoCompra == "sieger"){
        let cantidadProductoC = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar")
        calculstock(cantidadProductoC, stockProductoC, precioProductoC) 
    }
    else if(productoCompra == "canfeed"){
        let cantidadProductoD = prompt ("ingrese que cantidad de " + nombreProductoD + " desea comprar")
       calculstock(cantidadProductoD, stockProductoD, precioProductoD)
    }
    else if (productoCompra == "pedigree"){
            let cantidadProductoE = prompt ( "ingrese que cantidad de " + nombreProductoE + " desea comprar")
        calculstock(cantidadProductoE, stockProductoE, precioProductoE)
    }

    else {
    alert("no tenemos ese producto en venta")
    }
}
if(precioTotal != 0){
    alert("el precio total es:" + precioTotal)
}

alert("Gracias por su visita")