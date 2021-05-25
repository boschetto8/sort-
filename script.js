arrayProductos = [];

class Producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.precio = precio
    }
aumentarProducto (){
  this.precio *=  1.15
 }

}

const prod1 = new Producto (1, "YERBA", 350);
arrayProductos.push (prod1);
prod1.aumentarProducto();

const prod2 = new Producto (2, "LavANDina", 180);
arrayProductos.push (prod2);;

const prod3 = new Producto (3, "Manteca", 120);
arrayProductos.push (prod3);

const prod4 = new Producto (4, "Lentejas", 130);
arrayProductos.push (prod4);

const prod5 = new Producto (5, "Leche", 60);
arrayProductos.push (prod5);
console.log (arrayProductos);






function ordenarArray() {
arrayProductos.sort(function(a, b) {
    return a.precio - b.precio
});
}

ordenarArray();

console.log (arrayProductos)
