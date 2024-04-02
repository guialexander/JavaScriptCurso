/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */

import hamburguerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm}  from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";


const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
});

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});



/*keydown: Se dispara cuando se presiona una tecla del teclado.
keyup: Se dispara cuando se suelta una tecla del teclado después de haber sido presionada.
keypress: Se dispara cuando se presiona una tecla del teclado que produce un carácter. 
Sin embargo, este evento no se dispara para teclas que no producen caracteres (como Shift, Ctrl, Alt, etc.). */



