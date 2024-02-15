export const listProducts = async() =>{

    console.log("entro")
    try{
        const response = await fetch('http://localhost:3001/productos');
        const productsData = await response.json();
        return productsData;
    }catch(e){
        console.log("Error",e)
    }
}

