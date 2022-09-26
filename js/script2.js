let nombreProductoA= "performance"
let precioProductoA= 200
let stockProductoA= 15

let nombreProductoB="eukanuba"
let precioProductoB= 150
let stockProductoB= 20

let nombreProductoC = "sieger"
let precioProductoC = 100
let stockProductoC= 10

let nombreProductoD = "canfeed"
let precioProductoD = 50
let stockProductoD = 10

let nombreProductoE = "pedigree"
let precioProductoE = 30
let stockProductoE = 10

let precioTotal = 0

alert("estos son nuestros productos:  \n - performance \n - eukanuba \n - sieger \n - canfeed \n - pedigree ")

let cantidadCompra = prompt("que cantidad de productos distintos quiere comprar")

for (let i = 0; i < cantidadCompra; i = i + 1){
    
    let productoCompra = prompt("ingrese que productos quiere comprar:\n - performance \n - eukanuba \n - sieger \n - canfeed \n - pedigree")


    if (productoCompra.toUpperCase() == "performance"){
        let cantidadProductoPerformance = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar")
        if(cantidadProductoPerformance <=stockProductoA){
             precioTotal = precioTotal + (cantidadProductoA * precioProductoA)
        }
        else{
        alert("actualmente tenemos" + stockProductoA + "unidades de este producto")}
    }


    else if (productoCompra == "eukanuba"){
        let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar")
        precioTotal = precioTotal + (cantidadProductoB * precioProductoB)
   
    }

    else if (productoCompra == "sieger"){
        let cantidadProductoC = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar")
        precioTotal = precioTotal + (cantidadProductoC * precioProductoC)
    
    }
    else if(productoCompra == "canfeed"){
        let cantidadProductoD = prompt ("ingrese que cantidad de " + nombreProductoD + " desea comprar")
        precioTotal = precioTotal + (cantidadProductoD * precioProductoD)
    }
    else if (productoCompra == "pedigree"){
            let cantidadProductoE = prompt ( "ingrese que cantidad de " + nombreProductoE + " desea comprar")
            precioTotal = precioTotal + (cantidadProductoE * precioProductoE)
    }

    else {
    alert("no tenemos ese producto en venta")
    }
}
if(precioTotal != 0){
    alert("el precio total es:" + precioTotal)
}

alert("Gracias por su visita")