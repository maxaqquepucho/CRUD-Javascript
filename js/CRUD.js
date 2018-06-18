
var btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click', createRow);

function numFilas() {
    let tabla = document.querySelector('#personas');
    return  tabla.rows.length;
}


 function createRow() {

        if (btnAgregar.value == 'Agregar') {
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


            cell1.innerHTML =`<b>${numFilas()}</b>`;
            cell2.innerHTML = nombre.value;
            cell3.innerHTML = apellido.value;
            cell4.innerHTML = celular.value;
            cell5.innerHTML = `<a href="#" class="btn btn-primary eliminar" >Eliminar</a>`;
            cell6.innerHTML =`<a href="#" class="btn btn-warning">Editar</a>`;
            console.log('Fila '+numFilas());
        } else {

        }


    }
    let personas = document.getElementById('personas');
    personas.addEventListener('mouseover', function(event){
        event.preventDefault();
        var fila =event.target.closest('tr');
        if ( fila == null) {
            console.log('fila Nulo');
        } else {
            var btn = document.querySelector('.eliminar');
            console.log(fila);

            console.log(fila.children[4].children[0]);
            console.log(fila.children[1]);

            /*EVENTO ELIMINAR FILA*/

            eliminarFila = fila.children[4].children[0];
            eliminarFila.addEventListener('click',function(e){
                e.preventDefault();
                fila.remove();
                limpiarCampos();
            });

            /*EVENTO EDITAR FILA*/

            editarFila = fila.children[5].children[0];
            editarFila.addEventListener('click',function(e){
                e.preventDefault();



                cambiarAccion();
                const codigo = document.getElementById('codigo');
                const nombre = document.getElementById('nombre');
                const apellido = document.getElementById('apellido');
                const celular = document.getElementById('celular');

            //    nombre.setAttribute('value', fila.children[1].value);
                codigo.value = fila.children[0].textContent;
                nombre.value = fila.children[1].textContent;
                apellido.value = fila.children[2].textContent;
                celular.value = fila.children[3].textContent;
                console.log(nombre.value);
            });

        }
    });

    function limpiarCampos() {
        const codigo = document.getElementById('codigo');
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const celular = document.getElementById('celular');

        codigo.value = '';
        nombre.value = '';
        apellido.value = '';
        celular.value = '';
    }


    function cambiarAccion(){
        let accion = document.getElementById('agregar');
        accion.value = 'Editar';
    }

    function createInputID(){
        const elementoID = document.getElementById('formPersona');
        let div = document.createElement('div');
        const input = `
            <label for="exampleInputEmail1" class="col-2">ID</label>
            <input id="id"   type="text" class="form-control   col-6"   placeholder="ID" desabled>
        `
        div.innerHTML = input;
        div.setAttribute('class','form-group ');
        div.setAttribute('class','d-flex flex-row justify-content-start');
        // div.setAttribute('class', 'mt-2');

        elementoID.appendChild(div);
        // elementoID.removeChild(elementoID.children[3]);
    }
    function removeInputID(){
        const elementoID = document.getElementById('formPersona');
        elementoID.removeChild(elementoID.children[4]);

    }






    // var btnclick = function () {
    //     console.log(btn);
    // };

    // btn.addEventListener('click', btnclick);

    // $(document).on('click', '.eliminar', function (event) {
    // event.preventDefault();
    // $(this).closest('tr').remove();
    // });

    // function eliminarRow(t){
    //
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
