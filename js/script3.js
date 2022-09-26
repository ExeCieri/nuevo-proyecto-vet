let nombreMarcaA = "royal"
let nombreMarcaB = "purina"


let nombreProductoA = "performance adulto"
let precioProductoA = 10

let nombreProductoB = "performance juniors"
let precioProductoB = 20

let nombreProductoC = "weigh control"
let precioProductoC = 15

let compra = prompt ("que marca desea comprar: \n - royal \n - purina \n - esc- salir");


if (compra == "royal") {
     prompt ("que alimentos desea comprar: \n - performance adulto \n - performance juniors \n - weigh control \n - esc-salir");
    let cantidadProductoA = prompt("que cantidad desea comprar " + nombreProductoA + " desea comprar")
    let cantidadProductoB = prompt("que cantidad desea comprar " + nombreProductoB + " desea comprar")
    let cantidadProductoC = prompt ("que cantidad desea comprar " + nombreProductoC + " desea comprar")

    let precioTotalA = cantidadProductoA * precioProductoA
    let precioTotalB = cantidadProductoB * precioProductoB
    let precioTotalC = cantidadProductoC * precioProductoC

    alert("el precio total es: " + precioTotal)
} 
else if(compra == "purina" ){
    prompt("que alimentos desea comprar: \n - eukanuba \n - esc-salir");
    
}

else{
    alert("gracias por su visita")
}
// while (entrada != "esc"){
// alert( "el usuario ingreso " + entrada);
// entrada = prompt ("que productos desea comprar: \n - performance adulto \n - performance juniors \n - weigh control \n - esc-salir");
// let cantidadCompra}


