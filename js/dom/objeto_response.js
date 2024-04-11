const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
let breackpoint = w.matchMedia(mq);
const responsive = (e)=>{
    if(e.matches){
        d.getElementById(id).innerHTML = desktopContent;
    }else{
        d.getElementById(id).innerHTML = mobileContent;
    }
    //console.log("MQ",breackpoint,e.matches);

}

breackpoint.addEventListener("change",responsive);
responsive(breackpoint);

}