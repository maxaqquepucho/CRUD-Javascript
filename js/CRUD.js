
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

     const aboton = document.createElement('a');
     aboton.className = 'btn btn-primary eliminar';
     aboton.setAttribute('href','#');
     aboton.innerHTML = 'Eliminiar';
     cell1.innerHTML =`<b>${numFilas()}</b>`;
     cell2.innerHTML = nombre.value;
     cell3.innerHTML = apellido.value;
     cell4.innerHTML = celular.value;
     //cell5.innerHTML = `<a href="#" class="btn btn-primary eliminar" >Eliminar</a>`;
     cell5.appendChild(aboton);
     cell6.innerHTML =`<a href="#" class="btn btn-warning">Editar</a>`;
     console.log('Fila '+numFilas());

    }

    document.addEventListener('mouseover', function(event){
        event.preventDefault();
        var fila =event.target.closest('tr');
        if ( fila == null) {
            console.log('fila Nulo');
        } else {
            var btn = document.querySelector('.eliminar');
            console.log(fila);

            console.log(fila.children[4].children[0]);


            eliminarFila = fila.children[4].children[0];
            eliminarFila.addEventListener('click',function(e){
                e.preventDefault();
                fila.remove();

            });

        }
    });
    // var btnclick = function () {
    //     console.log(btn);
    // };

    // btn.addEventListener('click', btnclick);

    // $(document).on('click', '.eliminar', function (event) {
    // event.preventDefault();
    // $(this).closest('tr').remove();
    // });

    // function eliminarRow(e){
    //     e.preventDefault();
    //     //var indice = querySelector('.eliminar');
    //     var td = t.parentNode;
    //    var tr = td.parentNode;
    //    var table = tr.parentNode;
    //      // console.log(tr.firstElementChild.innerHTML);
    //      // console.log(table.children[0]);
    //     console.log(tr.sectionRowIndex);
    //
    //     table.removeChild(tr);
    //
    //
    // }
