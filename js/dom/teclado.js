const d = document;
let x = 0,
    y = 0;
 
export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect(); //limitar colisión 
    // console.log(e.keyCode); // num
    // console.log(e.key);
    // console.log(limitsBall,limitsStage); // un objeto que nos trae los limites
    
       

    

    switch (e.keyCode){
        //letf
        case 37:
         e.preventDefault();
         if(limitsBall.left > limitsStage.left)x--;
         
         
         break;
        //up
        case 38:
         e.preventDefault(); 
         if(limitsBall.top > limitsStage.top)y--;
         break;
        //right
        case 39:
         e.preventDefault();
         if(limitsBall.right < limitsStage.right)x++;
         break;
        //down
        case 40:
         e.preventDefault();
         if(limitsBall.bottom < limitsStage.bottom)y++;
         break;
       
        default:
            break;

    };
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

export function shortcuts (e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e);
    

    if( e.key === "a" && e.altKey){
        alert ("Haz lanzado una alerta con el teclado");
    }
    if( e.key === "c" && e.altKey){
        confirm ("Haz lanzado una confirmación con el teclado");
    }
    if( e.key === "p" && e.altKey){
        prompt ("Haz lanzado una prompt (aviso) con el teclado");
    }
}

