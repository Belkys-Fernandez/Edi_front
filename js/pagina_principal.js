window.addEventListener('load', load);

function load() {
  peticionCargarProductos();

 }


var cajita = document.getElementsByClassName('formulario__input');/*Selecciono todos los elementos que tengan la clase 'tal' que quiero validar */ 
for (var i = 0; i < cajita.length; i++) {/* lo recorro y "cuento" los elementos que hay con length*/
  cajita[i].addEventListener('keyup', function(){ /* keyup es el evento que evalua que es lo que pasa cuando dejo de escribir, en este caso en el formulario*/
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar'); /* si mi cajita del formulario tiene al menos un caracter, le aplica la clase fijar que hace que se quede arriba el texto */
    } else {
      this.nextElementSibling.classList.remove('fijar');/* sino, vuelve a bajar */
    }
  });
}

//FUNCION PARA CARGAR
let con = document.getElementById('con');
let colum = document.getElementById('nombre_columnas');
let pote = document.getElementById('pote');
let botel  = document.getElementById('botel');

function peticionCargarProductos(){
 

  xmlhttp = new XMLHttpRequest();//clase del sistema ,para hacer peticion nesecitamos un objeto de esta clase

  xmlhttp.onreadystatechange = function () {//onreadystatechange :metodo de respuesta
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Done:termino
          if (xmlhttp.status == 200) {//200:volvio todo bien
            var data=  JSON.parse(xmlhttp.responseText);

          console.log(data);


          var nombre_columnas = Object.keys(data[0]);

             for (var i = 0; i < nombre_columnas.length; i++) {
             
                colum.innerHTML = colum.innerHTML +
                '<th scope="col">' + nombre_columnas[i] + '</th>'

               
                botel.innerHTML = botel.innerHTML +
                '<th scope="col">' + nombre_columnas[i] + '</th>'

               
             
            }
         
                 
         
              for  (var i = 0; i < data.length; i++) {
                if (data[i].presentacion ="cajas" ){
                  con.innerHTML = con.innerHTML +
                  
                  '<td class="table-white">' + data[i].id_producto + '</td>' +
                  '<td class="table-white">' + data[i].categoria + '</td>' +
                  '<td class="table-white">' + data[i].presentacion+ '</td>' +
                  '<td class="table-white">' + data[i]. descripcion + '</td>' +
                  '<td class="table-white">' + data[i].valor + '</td>' +
                  '<td class="table-white"> <img src=" '+ data[i].imagen + ' "  alt="Girl in a jacket">     </td>' +
                  
                  '</tr>' ;

                }else {
                  pote.innerHTML = pote.innerHTML +
                  
                  '<td class="table-white">' + data[i].id_producto + '</td>' +
                  '<td class="table-white">' + data[i].categoria + '</td>' +
                  '<td class="table-white">' + data[i].presentacion+ '</td>' +
                  '<td class="table-white">' + data[i]. descripcion + '</td>' +
                  '<td class="table-white">' + data[i].valor + '</td>' +
                  '<td class="table-white"> <img src=" '+ data[i].imagen + ' "  alt="Girl in a jacket">     </td>' +
                  
                  '</tr>' ;

                }
            
                 

              }   

          }
          else{

            }

      }
  }
  //vervo + ruta + true o falso  y concatenar +'/' + variable 
  xmlhttp.open("GET",'https://edi-backend.herokuapp.com/Productos/listaProducto',true);//true:asincronico, false:sincronica
  xmlhttp.send();//SEND:ENVIAR
}
/*
xmlhttp.responseText
*/