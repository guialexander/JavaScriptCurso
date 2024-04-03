const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime(); //convierte en milisegundos para hacer los calculos

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime();
        let limitTime = (countdownDate - now);
        let seconds = ("0" + Math.floor((limitTime / 1000)) % 60).slice(-2);//colocamos el "0" para que salga ejempl 09 08 etc, y con el slice le quitamos el 0 cuando hay mas de dos digitos
        let minutes = ("0" + Math.floor((limitTime / (1000*60)) ) % 60).slice(-2);
        let hours   = ("0" + Math.floor((limitTime / (1000*60*60)) % 24)).slice(-2);
        let days    = Math.floor(limitTime / (1000*60*60*24)); //86400 la multiplicacion de 60 seg tiene un min por 60 min tiene una hora*24 horas tiene un día
            


        $countdown.innerHTML = `<h3> Faltan: ${days} Días ${hours} horas ${minutes} Minutos ${seconds} Segundos <br>  Para la Copa America 2024 ⚽⚽⚽⚽⚽😀</h3>`;
        
        
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;

        }

    },1000);    
  
  

}