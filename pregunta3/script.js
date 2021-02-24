var total = 0;
var diferencia = 0;
var presupuesto = 0;

function sumaTotal() {
    diferencia = total - presupuesto;
    document.getElementById("totalText").innerHTML = total + ".";
    document.getElementById("diferenciaText").innerHTML = diferencia + ".";
}

function addRow() {
    producto = document.getElementById("producto").value;
    precio = document.getElementById("precio").value;
    cantidad = document.getElementById("cantidad").value;
    presupuesto = document.getElementById("presupuesto").value;

    if (producto == "" && precio == "" && cantidad == "" && presupuesto == "") {
        alert("Faltan campos por llenar");
    }
    else {

        table = document.getElementById("table");
        next = document.getElementById("next");

        body = document.createElement("thead");
        row = document.createElement("tr");

        cell1 = document.createElement("td");
        cell1.innerHTML = [producto];

        cell2 = document.createElement("td");
        cell2.innerHTML = [precio];

        cell3 = document.createElement("td");
        cell3.innerHTML = [cantidad];

        cell4 = document.createElement("td");
        subtotal = cantidad * precio;
        total += subtotal;
        cell4.innerHTML = [subtotal];
        cell4.className = "sub";

        if (subtotal > presupuesto) {
            cell5 = document.createElement("td");
            cell5.innerHTML = ["Sobre"];
        }
        else {
            cell5 = document.createElement("td");
            cell5.innerHTML = ["Dentro"];
        }

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);


        body.appendChild(row);
        table.appendChild(body);

        console.log(row);
        console.log(compra, precio, cantidad, presupuesto);

        document.getElementById("form").reset();

    }
}


