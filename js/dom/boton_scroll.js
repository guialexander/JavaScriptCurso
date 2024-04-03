
const d = document,
    w = window;
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    //console.log($scrollBtn) 
    


    w.addEventListener("scroll", e =>{
        let scrollTop = w.pageXOffset || d.documentElement.scrollTop;
        
        if(scrollTop > 200){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
        //console.log(w.pageYOffset,d.documentElement.scrollTop); // nos muestra la distancia que ha recorrido el scroll
    })
    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0,
        })
        };

    })

}