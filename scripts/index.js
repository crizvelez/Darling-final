import {listProducts} from'../services/api.js';
let ArrayProductos=[];
var valorExtraido = localStorage.getItem("id");

const mostrarProductos = async () => {
    console.log("El item es ", valorExtraido);
    //Utilizamos la funcion que va traer los datos de los prodcutos
    ArrayProductos = await listProducts();
   console.log(ArrayProductos);
}
mostrarProductos();