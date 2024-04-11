const d = document;
const ls = localStorage;


export default function darkTheme(btn, classDark){
    const $themeBtn =  d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); // se agrega data-dark en la cabecera que necesitamos el modo oscuro. para que sea funcional el codigo 

    let moon = "🌛",
        sun  =  "🌞";
    
    const lightMode = ()=>{
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","ligth");
    }


    const darkMode  = ()=>{
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    };
    
    d.addEventListener("click", (e) =>{
        if( e.target.matches(btn)){
            //console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                lightMode();
                }
               }
    });

    d.addEventListener("DOMContentLoaded", (e)=>{
        //console.log(ls.getItem("theme")); // trae la variable thee que tiene localstore;
        if(ls.getItem("theme")== null)ls.setItem("theme","ligth"); //primera vez que carga que es null theme de LocaStorage
        if(ls.getItem("theme")=== "ligth") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
    });

}

