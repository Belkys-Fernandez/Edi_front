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
