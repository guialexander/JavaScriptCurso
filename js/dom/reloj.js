const d = document;


export function digitalClock(clock, btnPlay, btnStop){
     //console.log(clock,btnPlay,btnStop) // le predeterminamos cuando llamamos la función en index.dom.js
    let clockTempo;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){  // compara si la class o id  es el mismo que trae en la variable btnPlay
           clockTempo = setInterval(()=>{
                let clockHour= new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;

            },1000);
            e.target.disabled = true;

        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
            
        }
    })
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio"); //creadno <audio>
    $alarm.src = sound; //agregando src ruta
    
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
           alarmTempo = setTimeout(()=>{
            $alarm.play(); //hacer sonar la alarma
            },1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;   
            d.querySelector(btnPlay).disabled = false; 
             
         }

    })
   

}