//Inicializamos la libreria AOS
AOS.init();
let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu_bar');
menu_bar.addEventListener('click', function(){/*Escuchador de los eventos. cuando escuche el evento click va a ajecutar la funcion()*/
    menu.classList.toggle('menu-toggle')
});

/*por medio de js seleccionamos nuestros elementos para traer el menu devuelta*/