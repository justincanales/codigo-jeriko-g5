let producto = +prompt("Ingrese el código del producto");

switch (producto) {
    //case posible_valor, este puede ser un num, booleano, string
    case 1:
        console.log("Chocolate");
        //todo el código que quiera
        break; //corta la ejecución, como un return
    case 2:
        console.log("Papitas");
        break;
    case 3:
        console.log("Galletas");
        break;
    case 4:
        console.log("Pollo");
        break;
    default:
        //else
        console.log("Código no encontrado");
}

