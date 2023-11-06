//ARRAY, es un tipo  de dato estructurado que permite almacenar un conjunto de datos homogenias
//es decir, todos ellos de lo mismo tipo y relacionados
var frutas=["fresa", "pera","mango","·uva"];

//consola.log(frutas);

//cantidad de elementos
//consola.log(frutas.length);

//indice de los elementos
//consola.log(frutas[2]);

//metodos:mutar elementos
//metodo ingrese el elemento en ultimo posicion
 var masfrutas = frutas.push("manzana");
 consola.log(frutas);
 
 //metodo ingrese el elemento en ultimo posicion
 var menosfruta = frutas.push("manzana");
 //metodo ingreso de elemento en ultima posicion 
var masfrutas = frutas.push("manzana");
console.log(frutas);

//metodo sacar elemento en ultima posicion 
var menosfrutas = frutas.pop("manzana");
console.log(frutas);

//metodos inicio de array
var nuevoingreso = frutas.unshift("cereza");
console.log(frutas);

//metodos borrar inicio 
var menosingreso = frutas.shift("cereza");
console.log(frutas);

//metodos busca posicion
var posicion = frutas.indexof("pera");
console.log(posicion);
 