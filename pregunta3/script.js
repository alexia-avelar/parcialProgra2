var total = 0;
var diferencia = 0;
var subtotal = 0;
var presupuesto = 0;
var subsubtotal = 0;

function sumaTotal() {
    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("diferencia").innerHTML = diferencia;
    diferencia = presupuesto - subtotal;
}

function addRow() {
    producto = document.getElementById("producto").value;
    precio = document.getElementById("precio").value;
    cantidad = document.getElementById("cantidad").value;
    presupuesto = document.getElementById("presupuesto").value;

    celda1 = document.createElement("td");
    celda1.innerHTML = [producto];

    celda2 = document.createElement("td");
    celda2.innerHTML = [precio];

    celda3 = document.createElement("td");
    celda3.innerHTML = [cantidad];

    celda4 = document.createElement("td");
    subsubtotal = precio * cantidad;
    subtotal += subsubtotal;
    celda4.innerHTML = [subsubtotal];
    celda4.className = "subtotal";

    if (subtotal > presupuesto) {
        celda5 = document.createElement("td");
        celda5.innerHTML = ["sobre"];
    }
    else {
        celda5 = document.createElement("td");
        celda5.innerHTML = ["dentro"];
    }

    tabla = document.getElementById("tabla");
    next = document.getElementById("next");

    body = document.createElement("thead");
    row = document.createElement("tr");

    row.appendChild(celda1);
    row.appendChild(celda2);
    row.appendChild(celda3);
    row.appendChild(celda4);
    row.appendChild(celda5);

    body.appendChild(row);
    tabla.appendChild(body);
}

console.log(row);
console.log(compra, precio, cantidad, presupuesto);

document.getElementById("form").reset();




