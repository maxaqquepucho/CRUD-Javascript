
var btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click', createRow);

function numFilas() {
    let tabla = document.querySelector('#personas');
    return  tabla.rows.length;
}


 function createRow() {

     let tabla = document.querySelector('#personas');
     console.log(personas.rows.length);
     //var numFilas = tabla.rows.length;

     let nombre = document.querySelector('#nombre');
     let apellido = document.querySelector('#apellido');
     let celular = document.querySelector('#celular'); // let row = tabla.insertRow(this.numFilas);
     let row = tabla.insertRow(numFilas());
     //console.log(this.numFilas);
     let cell1 = row.insertCell(0);
     let cell2 = row.insertCell(1);
     let cell3 = row.insertCell(2);
     let cell4 = row.insertCell(3);
     let cell5 = row.insertCell(4);
     let cell6 = row.insertCell(5);

     cell1.setAttribute('scope','row')

     cell1.innerHTML =`<b>${numFilas()+1}</b>`;
     cell2.innerHTML = nombre.value;
     cell3.innerHTML = apellido.value;
     cell4.innerHTML = celular.value;
     cell5.innerHTML = `<a href="#" class="btn btn-primary">Eliminar</a>`;
     cell6.innerHTML =`<a href="#" class="btn btn-warning">Editar</a>`;
     console.log(numFilas());

    }
