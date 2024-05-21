/*
    let nombre = "mariana";
    let apellido = "sosa";
    console.log ( nombre +" "+ apellido);
    let numeroa= 18;
    let numerob= 33;
    let numeroc=82;
    let suma= numeroa+numerob;
    console.log(suma);
    let suma2= suma + numeroc;
    console.log(suma2);


*/


/*ejercicio 11-A*/


let topping = "kitkat";
let precio;

let helado = 30;
let preciofinal;

if (topping == "oreo") {
    precio = 10;
    console.log(preciofinal = helado + precio);
} else {
    if (topping == "kitkat") {
        precio = 15;
        console.log(preciofinal = helado + precio)
    } else {
        if (topping == "kinder") {
            precio = 25;
            console.log(preciofinal = helado + precio)
        } else {
            console.log("No tenemos este topping")

        }

    }

}


/*ejercicio 11-B*/

let menu = "ñoquis";
switch (menu) {
    case "pescado":
        console.log("Le puedo ofrecer vino blanco")
        break;
    case "carne":
        console.log("Le puedo ofrecer vino tinto")
        break;
    case "verdura":
        console.log("Le puedo ofrecer agua")
        break;
    default:
        console.log("Elija carne, verdura o pescado")
        break;
}

/*ejercicio 11-C*/

let listadefrutas = ["manzana", "banana", "melon", "sandia", "frutilla", "piña"];
listadefrutas.push("uva")
listadefrutas.push("melocoton", "papaya")
for (let fruta = 0; fruta < listadefrutas.length; fruta++) {
    console.log("mostrar  " + listadefrutas[fruta]);

}

/*ejercicio 11-D*/

let number = 0;
while (number < 11) {
    console.log("numero mas chico que 11, siendo " + number + " el valor de la variable")
    number++;
}


