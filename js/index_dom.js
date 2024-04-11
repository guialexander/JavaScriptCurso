/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */

import hamburguerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm}  from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/oscuro_tema.js";
import responsiveMedia from "./dom/objeto_response.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js"
import networkStatus from "./dom/detenccion_red.js";
import webCam from "./dom/detenccion_webCam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";



const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
        "Jun 20, 2024 19:30:00",
        "Pitazo de la Copa America 2024!!!!⚽⚽⚽⚽⚽😀");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://maps.app.goo.gl/NbTgiVRZKpW3aQLe9" target="_blank">Ver Video</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.9822374285213!2d-75.55383173140109!3d10.422983942888436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625fa6fffffff%3A0xc5e9aefe72bf812e!2sMonumento%20Torre%20del%20Reloj!5e0!3m2!1ses!2sco!4v1712276132437!5m2!1ses!2sco" 
        width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        );

    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/embed/V1bFr2SWP1I?si=APEHdASIickgUWfE" target="_blank">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/V1bFr2SWP1I?si=APEHdASIickgUWfE" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        );
    responsiveTester("responsive-tester");   
    userDeviceInfo("user-device");
    networkStatus();
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
        
    
});

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode"); // toca sacarlo ya que en la función cuenta con un DOMContentLoaded



/*keydown: Se dispara cuando se presiona una tecla del teclado.
keyup: Se dispara cuando se suelta una tecla del teclado después de haber sido presionada.
keypress: Se dispara cuando se presiona una tecla del teclado que produce un carácter. 
Sin embargo, este evento no se dispara para teclas que no producen caracteres (como Shift, Ctrl, Alt, etc.). */



